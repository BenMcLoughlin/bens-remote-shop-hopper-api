import * as extract from './extract';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);

    let result = {};

    result = businessName
        ? await extract.singleBusiness(businessName, domain)
        : await extract.allShops[siteHost]();

    res.status(200).json({
        status: 'success',
        message: 'Products Loaded',
        result: result
    });
};
