import * as extract from './extract';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);
    let data = {};

    try {
        data = await extract.singleBusiness(businessName, domain);

        return res.status(200).json({ count: data.productsUploaded });
    } catch (error) {
        return res.status(422).json(error);
    }
};