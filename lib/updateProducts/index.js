import * as extract from './extract';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);
    let result = {};

    try {
        if (!businessName && !domain) {
            result = await extract.allShops[siteHost]();
        } else {
            result = await extract.singleBusiness(businessName, domain);
        }

        return res.status(200).json({ result: result.productsUploaded });
    } catch (error) {
        return res.status(422).json(error);
    }
};