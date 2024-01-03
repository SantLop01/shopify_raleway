const { conn } = require('../config/conn')

const getUsers = async () => {
    try {
        const [ users ] = await conn.query('SELECT * FROM user;');
        const response = {
            isError: false,
            data: users
        };
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo obtener todos los usuarios porque ${e}`
        } 
        return error;
    } finally {
        conn.releaseConnection();
    }
}

const getUser = async (params) => {
    try {
        console.log('lo que recibe el modelo', params)
        const [ user ] = await conn.query('SELECT * FROM user WHERE user.email = ?', params);
        const response = {
            isError: false,
            data: user
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo obtener el usuario solicitado porque ${e}`
        } 
        return error;
    } finally {
        conn.releaseConnection();
    }
};

const registerUser = async (params) => {
    try {
        const values = [params]
        const [ data ] = conn.query('INSERT INTO user (user_name, email, password) VALUES ?;', [values]);
        const response = {
            isError: false,
            user: data 
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo crear el nuevo usuario ${e}`
        }
        return error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getUsers,
    getUser,
    registerUser
}