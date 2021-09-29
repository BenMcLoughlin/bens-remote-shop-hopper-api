import * as extract from './extract';
import * as format from './format';
import * as load from './load';

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);

    let rawData = [];

    rawData = businessName
        ? await extract.single(businessName, domain)
        : await extract.allShops[siteHost]();

    const formattedData = await format.products(rawData, businessName);

    await load.products(formattedData);

    res.status(200).json({
        status: 'success',
        message: 'products loaded',
    });
};
