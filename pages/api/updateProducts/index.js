import * as extract from './extract';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);
    let result = {};

    console.log('siteHost, businessName, domain:', siteHost, businessName, domain)

    if (!businessName && !domain) {
        result = await extract.allShops[siteHost]();
    } else {
        result = await extract.singleBusiness(businessName, domain);
    }

    console.log('result:', result)

    res.status(200).json({
        status: 'success',
        message: 'Products Loaded',
        result: result
    });
};
