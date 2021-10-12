import * as extract from './extract';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);
    let data = {};

    try {
        // if (!businessName && !domain) { todo
        //     result = await extract.allShops[siteHost]();
        // } else {
        //     result = await extract.singleBusiness(businessName, domain);
        // }

        data = await extract.singleBusiness(businessName, domain);

        console.log('data.productsUploaded.length ???:', data.productsUploaded.length);

        return res.status(200).json({ count: data.productsUploaded.length });
    } catch (error) {
        return res.status(422).json(error);
    }
};