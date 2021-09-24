import * as extract from './extract';
import * as format from './format';
import * as load from './load';

const updateDatabase = async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);

    let rawData = [];

    rawData = businessName
        ? await extract.single(businessName, domain)
        : await extract.allShops[siteHost]();

    const formatedData = format.products(rawData);

    load.products(formatedData);

    res.status(200).json({
        status: 'success',
        message: 'products loaded',
    });
};

export default updateDatabase;
