import { buckets, sizeOptions } from 'backend/utils/search';

export async function products(data, business_name) {
    let formatted = [];
    let appliedBuckets = buckets[business_name];

    const getReference = (variants, options) => {
        let reference = {};
        let price = 0;
        let compareAtPrice = 0;
        let sizes = [];
        let colors = [];

        variants.map((variant) => {
            price += Number(variant.price);
            compareAtPrice += Number(variant.compare_at_price);

            return true;
        });

        options.map((option) => {
            if (option.name.toLowerCase() === 'size') {
                sizes = option.values;
            }

            if (option.name.toLowerCase() === 'color') {
                colors = option.values;
            }

            return true;
        });


        reference.sizes = sizes;
        reference.colors = colors;
        // We won't use floats because JavaScript.
        reference.publishedAtPrice = Math.trunc((price / variants.length) * 100);
        reference.compareAtPrice = Math.trunc((compareAtPrice / variants.length) * 100);

        return reference;
    };

    if (business_name) {
        formatted = await data.map((product) => {
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

            // if (!reference.sizes.length) {
            //     return false;
            // }

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

            return output;
        });
    }

    return formatted;
}
