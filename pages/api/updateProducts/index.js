import * as extract from './extract';
<<<<<<< HEAD
=======
import * as format from './sanitize';
import * as load from './load';
>>>>>>> 29f69a55049789ea3b0766a7378488c5bf06b6d9

export default async (req, res) => {
    const { siteHost, businessName, domain } = JSON.parse(req.body);

    let result = {};

    result = businessName
        ? await extract.singleBusiness(businessName, domain)
        : await extract.allShops[siteHost]();

<<<<<<< HEAD
    res.status(200).json({
        status: 'success',
        message: 'Products Loaded',
=======
    // const formattedData = await format.products(rawData, businessName);

    // const result = await load.products(formattedData);

    // const result = rawData

    console.log('result in updateProducts:', result)

    res.status(200).json({
        status: 'success',
        message: 'products loaded',
>>>>>>> 29f69a55049789ea3b0766a7378488c5bf06b6d9
        result: result
    });
};
