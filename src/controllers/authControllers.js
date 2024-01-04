const authServices = require('../services/authServices');
const bcrypt = require('bcrypt');

module.exports = {
    loginView: (req, res) => {
        res.render('auth/login', {
            title: 'Login | Nanni Clothes',
        });
    },

    loginUser: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const user = await authServices.getOneUser(email);
        if (user.data.length) {
            const { data } = user;
            const enc_pass = data[0].password;
            console.log('Contraseña encripatada', enc_pass)
            const passValidate = await bcrypt.compare(password, enc_pass);
            req.session.isLogged = passValidate ? true : false;
            if (req.session.isLogged) {
                return res.redirect('/admin')
            }
        }
        res.status(401).render('auth/login', {
            title: 'Login | Nanni Clothes',
        });
    },

    registerView: (req, res) => {
        res.render('auth/register', {
            title: 'Register | Nanni Clothes'
        });
    },

    registerUser: async (req, res) => {
        const nickname = req.body.nick;
        console.log('apodo:', nickname)
        const email = req.body.email;
        const password = req.body.password;
        const enc_pass = await bcrypt.hash(password, 10);
        const createUser = await authServices.register(nickname, email, enc_pass);
        res.redirect('/home');
    },

    logoutUser: (req, res) => {
        req.session.isLogged = false
        res.redirect('/home')
    }
}