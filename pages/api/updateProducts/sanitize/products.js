import { bucketRelations } from 'backend/utils/search';
import { optionsMutation } from 'backend/utils/products';

export async function products(data, business_name) {
    let formatted = [];
    let appliedBuckets = bucketRelations[business_name];

    const getReference = (variants, options) => {
        let reference = {};
        let price = 0;
        let compareAtPrice = 0;

        variants.map((variant) => {
            price += Number(variant.price);
            compareAtPrice += Number(variant.compare_at_price);

            return true;
        });

        const { sizes, colors } = optionsMutation(appliedBuckets, options);

        reference.sizes = sizes;
        reference.colors = colors;
        // We won't use floats because JavaScript.
        reference.publishedAtPrice = Math.trunc((price / variants.length) * 100);
        reference.compareAtPrice = Math.trunc((compareAtPrice / variants.length) * 100);

        return reference;
    };

    if (business_name) {
        await data.map((product) => {
            const {
                title,
                handle,
                body_html,
                created_at,
                published_at,
                updated_at,
                vendor,
                product_type,
                tags,
                variants,
                images,
                options
            } = product;

            let reference = getReference(variants, options);

            const output = {
                business_name,
                buckets: appliedBuckets,
                title,
                handle,
                body_html,
                vendor,
                product_type,
                created_at,
                published_at,
                updated_at,
                tags,
                variants,
                images,
                options,
                original_price: reference.publishedAtPrice,
                compare_at_price: reference.compareAtPrice,
                sizes: reference.sizes,
                colors: reference.colors
            };

            if (reference.sizes.length >= 1) {
                formatted.push(output);
            }

            return true;
        });
    }

    return formatted;
}
