const { conn } = require('../config/conn');
const  { uploadFiles }  = require('../middlewares/uploadFiles');
const fs = require('fs');
const { cloudinary } = require('../utils/uploadImages');
const path = require('path');

const getAll = async () => {
    try {
        const [rows] = await conn.query('SELECT * FROM product;')
        const response = {
            isError: false,
            data: rows
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No pudimos obtener los datos debido a: ${e}`
        }
        return error
    } finally {
        await conn.releaseConnection();
    }
}

const getRelated = async (params) => {
    try {
        const [relatedItems] = await conn.query('SELECT * FROM product WHERE product.category_id = ?;', params);
        const response = {
            isError: false,
            relatedItems
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudieron traer los items relacionados porque: ${e}`
        }
        return error;
    } finally {
        conn.releaseConnection();
    }
}

const getOne = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name FROM product LEFT JOIN category ON product.category_id = category.category_id WHERE ?;', params);
        // const cat_id = rows[0].category_id;
        // const [relatedItems] = await conn.query('SELECT * FROM product WHERE product.category_id = ?;', cat_id);
        console.log('De la respuesa', rows)
        const response = {
            isError: false,
            data: rows
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo traer el item seleccionado porque ${e}`
        }
        return error;
    }
    finally {
        conn.releaseConnection();
    }
}

const createOne = async (params) => {
    try {
        console.log('Lo que llega antes de la variable', params)
        const prueba = [params]
        console.log('Lo que llega antes del insert', prueba)
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, dues, image_front, image_back, category_id) VALUES ?', [prueba]);
        const response = {
            isError: false,
            data: rows
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo crear el item debido a que: ${e}`
        }
        return error;
    } finally {
        await conn.releaseConnection();
    }
}

const editOne = async (params, id) => {
    try {
        const [ data ] = await conn.query('SELECT product.*, category.category_name FROM product LEFT JOIN category ON product.category_id = category.category_id WHERE ?;', id);
        const imageFront = data[0].image_front;
        const imageBack = data[0].image_back;
        const imagesToDelte = [imageFront, imageBack]

        for (let image of imagesToDelte) {
            const url = image.split('/');
            const name = url[url.length - 1];
            const [ id ] = name.split('.');

            cloudinary.uploader.destroy(id);
        }
        
        const [ rows ] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
        const response = {
            isError: false,
            data: rows,
            message: 'El item ha sido editado satisfactoriamente'
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            message: `No se pudo editar el item solicitado ${e}`
        }
        return error;
    } finally {
        conn.releaseConnection();
    }
}

const deleteOne = async (params) => {
    try {
        const [ product ] = await conn.query('SELECT image_front, image_back FROM product WHERE ?', params);
        const imageFront = product[0].image_front;
        const imageBack = product[0].image_back;
        const imagesToDelte = [imageFront, imageBack]

        for (let image of imagesToDelte) {
            const url = image.split('/');
            const name = url[url.length - 1];
            const [ id ] = name.split('.');

            cloudinary.uploader.destroy(id);
        }

        const [ rows ] = await conn.query('DELETE FROM product WHERE ?', params);
        const response = {
            isError: false,
            data: rows,
            message: 'Item borrado satisfactoriamente'
        }
        return response;
    } catch (e) {
        console.log('Este es el error', e)
        const error = {
            isError: true,
            message: `No se pudo eliminar el item debido a que: ${e}`
        }
        return error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getAll,
    getRelated,
    getOne,
    createOne,
    editOne,
    deleteOne
};