import * as extract from './extract';
import * as format from './sanitize';
import * as load from './load';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);

    let result = {};

    result = businessName
        ? await extract.singleBusiness(businessName, domain)
        : await extract.allShops[siteHost]();

    // const formattedData = await format.products(rawData, businessName);

    // const result = await load.products(formattedData);

    // const result = rawData

    console.log('result in updateProducts:', result)

    res.status(200).json({
        status: 'success',
        message: 'products loaded',
        result: result
    });
};
