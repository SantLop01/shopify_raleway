const usersModel = require('../models/usersModel');

const getAllUsers = async () => {
    return await usersModel.getUsers();
};

const getOneUser = async (email) => {
    return await usersModel.getUser(email);
};

const register = async (nickname, email, enc_pass) => {
    const userSchema = {
        user_name: nickname,
        email: email,
        password: enc_pass
    }
    return await usersModel.registerUser(Object.values(userSchema));
}

module.exports = {
    getAllUsers,
    getOneUser,
    register
}