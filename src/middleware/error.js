const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    const stack = process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.stack;
    res.status(statusCode).json({
        message,
        stack
    });
}
module.exports = {
    errorHandler
}