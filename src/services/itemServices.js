const itemsModel = require('../models/itemsModel');
const { cloudinary } = require('../utils/uploadImages');

const getAllItems = async () => {
    return await itemsModel.getAll();
}

const getRelated = async (cat_id) => {
    return await itemsModel.getRelated(cat_id)
}

const getOneItem = async (id) => {
    return await itemsModel.getOne({product_id: id});
}

const createItem = async (item, files) => {
    const imagesToUpload = [files.image1[0].path, files.image2[0].path];

    let securesURL = []
    for (let image of imagesToUpload) {
        const result = await cloudinary.uploader.upload(image, {
            type: "fetch",
            effect: "improve",
        }).catch(error => {
            console.log('Error de la subida de imagenes', error)
        })
        securesURL.push(result.secure_url)
    };

    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        dues: item.dues,
        stock: item.stock,
        discount: item.discount,
        image_front: securesURL[0],
        image_back: securesURL[1],
        category_id: item.category
    }

    return await itemsModel.createOne(Object.values(itemSchema));
}

const editItem = async (item, id, files) => {

    const imagesToUpload = [files.image1[0].path, files.image2[0].path];

    let securesURL = []
    for (let image of imagesToUpload) {
        const result = await cloudinary.uploader.upload(image, {
            type: "fetch",
            effect: "improve",
        }).catch(error => {
            console.log('Error de la subida de imagenes', error)
        })
        securesURL.push(result.secure_url)
    };

    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        dues: item.dues,
        stock: item.stock,
        discount: item.discount,
        image_front: securesURL[0],
        image_back: securesURL[1],
        category_id: item.category
    }

    return await itemsModel.editOne(itemSchema, {product_id: id});
}

const deleteItem = async (id) => {
    return await itemsModel.deleteOne({product_id: id});
};

const searchFilter = async (search, data) => {
    const searchTry = search
    const filterByName = data.filter(item => {
        const name = item.product_name.toLowerCase();
        return name.includes(searchTry)
    });
    console.log('Devuelve los productos filtradis', filterByName)
    return filterByName;
}

module.exports = {
    getAllItems,
    getRelated,
    getOneItem,
    createItem,
    editItem,
    deleteItem,
    searchFilter
};