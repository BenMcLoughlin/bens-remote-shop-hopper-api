import prisma from '../../../prisma/prisma.js';

const dbMetrics = async function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        status: 'success',
        message: 'Token sent to email address',
    });
};

export default dbMetrics;
