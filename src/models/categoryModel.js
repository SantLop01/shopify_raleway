const { conn } = require('../config/conn')

const getAll = async () => {
    try {
        const [ rows ] = await conn.query('SELECT * FROM category')
        const response = {
            isError: false,
            data: rows
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos traer todas las categorías porque: ${e}`
        }
        return error;
    } finally {
        conn.releaseConnection();
    }
}

const create = async (params) => {
    try {
        const create = [params]
        console.log('Ultimo paso', create)
        const [ rows ] = await conn.query('INSERT INTO category (category_name, category_description) VALUES ?', [create])
        const response = {
            isError: false,
            data: rows
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos crear la categoría debido a que: ${e}`
        }
        return error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getAll,
    create
}