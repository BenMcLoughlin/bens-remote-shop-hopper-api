/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const hydrateRequest = async (body) => {
    const res = await fetch('/api/hydrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await res.json();
    console.log('HYDRATE PRODUCTS RESPONSE:', data);

    return data;
};

export default hydrateRequest;

// {
//     "body_html": "<meta charset=\"utf-8\">\n<p>The key ingredient in this formula is Shea Butter which is proven to be highly effective in preventing skin from over-drying. This cream, which is also enhanced with extracts of chamomile, rosehip, and aloe vera, will soothe the skin without leaving a greasy feeling. Lightly scented with 100% pure essential oils of lemon, bergamot, and tangerine to give a fresh, clean scent that will last for hours. </p>\n<p><strong>Key Ingredients:</strong><br><strong>Shea Butter –</strong> an effective moisturizer for dry skin.<br><strong>Calendula Oil –</strong> soothes and softens the skin.<br><strong>Lemon Essential Oil –</strong> great cleanser with refreshing and cooling properties.<br><strong>Bergamot Calabrian Essential Oil –</strong> clears and cleanses oily skin.<br><strong>Tangerine Essential Oil –</strong> warm, comforting aroma and rejuvenating characteristics of the citrus family.<br><strong>Aloe Vera Extract –</strong> known to have soothing properties beneficial for the skin.</p>\n<p> </p>",
//     "created_at": "2020-04-09T17:36:15-06:00",
//     "handle": "sunshine-in-a-jar-cream",
//     "id": 4843341349001,
//     "images": [{
//         "created_at": "2020-04-09T17:36:17-06:00",
//         "height": 1050,
//         "id": 15608028430473,
//         "position": 1,
//         "product_id": 4843341349001,
//         "src": "https://cdn.shopify.com/s/files/1/0316/5847/5657/products/SunshineinaJar.jpg?v=1586475377",
//         "updated_at": "2020-04-09T17:36:17-06:00",
//         "variant_ids": [],
//         "width": 1050
//     }],
//     "options": [{
//         "name": "Weight",
//         "position": 1,
//         "values": ["2oz", "4oz", "8oz"]
//     }],
//     "product_type": "Body Care",
//     "published_at": "2021-09-06T12:48:00-06:00",
//     "tags": ["body care", "cream", "HH Products", "moisturize", "moisturizer", "moisturizing", "sunshine", "sunshine in a bottle"],
//     "title": "Sunshine in a Jar Cream",
//     "updated_at": "2021-09-21T15:48:20-06:00",
//     "variants": [{
//         "available": true,
//         "compare_at_price": null,
//         "created_at": "2020-04-09T17:36:16-06:00",
//         "featured_image": null,
//         "grams": 141,
//         "id": 33313072316553,
//         "option1": "2oz",
//         "option2": null,
//         "option3": null,
//         "position": 1,
//         "price": "9.95",
//         "product_id": 4843341349001,
//         "requires_shipping": true,
//         "sku": "10916",
//         "taxable": true,
//         "title": "2oz",
//         "updated_at": "2021-09-21T12:38:08-06:00"
//     }, {
//         "available": true,
//         "compare_at_price": null,
//         "created_at": "2020-04-09T17:36:16-06:00",
//         "featured_image": null,
//         "grams": 141,
//         "id": 33313072349321,
//         "option1": "4oz",
//         "option2": null,
//         "option3": null,
//         "position": 2,
//         "price": "16.95",
//         "product_id": 4843341349001,
//         "requires_shipping": true,
//         "sku": "10917",
//         "taxable": true,
//         "title": "4oz",
//         "updated_at": "2021-09-21T15:48:20-06:00"
//     }, {
//         "available": false,
//         "compare_at_price": null,
//         "created_at": "2020-04-09T17:36:16-06:00",
//         "featured_image": null,
//         "grams": 141,
//         "id": 33313072382089,
//         "option1": "8oz",
//         "option2": null,
//         "option3": null,
//         "position": 3,
//         "price": "26.95",
//         "product_id": 4843341349001,
//         "requires_shipping": true,
//         "sku": "10918",
//         "taxable": true,
//         "title": "8oz",
//         "updated_at": "2021-09-01T13:16:21-06:00"
//     }],
//     "vendor": "Healing Hollow Essential Oil Co."
// }