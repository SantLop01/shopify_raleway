const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
        return next();
    }
    return res.redirect('/home')
}

const user = (req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
}

module.exports = {
    isLogged,
    user
};