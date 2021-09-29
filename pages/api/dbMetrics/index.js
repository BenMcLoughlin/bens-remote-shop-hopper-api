import prisma from '../../../prisma/prisma.js';

const dbMetrics = async function (req, res, next) {
    const data = { hi: 'ben' };
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send({
        body: JSON.stringify(data),
    });
};

export default dbMetrics;
