export function index(req, res, next) {
    console.log('HELLO FROM METRICS');
    console.log('req: ', req);
    res.status(200).json({ status: 'success', data: 'hi' });
}
