exports.send = (res, status, message) => {
    return res.status(status).json({
        status,
        message,
        timestamp:Date.now()
    })
}