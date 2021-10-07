export async function products(data, business_name) {
    let formatted = [];

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

            const output = {
                business_name,
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
                options
            };

            return output;
        });
    }
    console.log('IN FORMAT FUNCTION: ', formatted.length);

    return formatted;
}
