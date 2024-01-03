const itemsModel = require('../models/itemsModel');

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
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        dues: item.dues,
        stock: item.stock,
        discount: item.discount,
        image_front: '../../img/' + files.image1[0].filename,
        image_back: '../../img/' + files.image2[0].filename,
        category_id: item.category
    }
    console.log('En services:', itemSchema)
    return await itemsModel.createOne(Object.values(itemSchema));
}

const editItem = async (item, id, files) => {
    console.log('Lo que llega a item Service en datos:', item);
    console.log('Lo que llega a item Service en imagenes:', files);
    const itemSchema = {
        product_name: item.name,
        product_description: item.description,
        price: item.price,
        dues: item.dues,
        stock: item.stock,
        discount: item.discount,
        image_front: '../../img/' + files.image1[0].filename,
        image_back: '../../img/' + files.image2[0].filename,
        category_id: item.category
    }
    console.log('EL ESQUEMA CREADO:', itemSchema);
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