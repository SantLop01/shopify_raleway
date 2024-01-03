const categoryModel = require('../models/categoryModel')

const getCategories = async () => {
    return await categoryModel.getAll();
}

const createCategory = async (category) => {
    const categorySchema = {
        category_name: category.name,
        category_description: category.description
    }
    console.log('Lo que llega a category Services', categorySchema);
    return await categoryModel.create(Object.values(categorySchema));
}

module.exports = {
    getCategories,
    createCategory
};