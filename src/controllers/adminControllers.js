const itemServices = require('../services/itemServices');
const categoryServices = require('../services/categoryServices');

module.exports = {
    adminView: async (req, res) => {
        const { data } = await itemServices.getAllItems();
        res.render('admin/admin', {
            title: 'Admin | Nanni Clothes',
            items: data
        })
    },

    editView: async (req, res) => {
        const id = req.params.id;
        const item = await itemServices.getOneItem(id);
        const category = await categoryServices.getCategories();
        const { data } = item;
        res.render('admin/edit', {
            title: 'Edit Item | Nanni Clothes',
            item: data[0],
            categories: category.data
        });
    },

    editItem: async (req, res) => {
        const item = req.body;
        const id = req.params.id;
        const files = req.files;
        await itemServices.editItem(item, id, files);
        res.redirect('/admin')
    },

    createView: async (req, res) => {
        const category = await categoryServices.getCategories();
        res.render('admin/create', {
            title: 'Create Item | Nanni Clothes',
            categories: category.data
        });
    },

    createItem: async (req, res) => {
        const item = req.body;
        const files = req.files;
        await itemServices.createItem(item, files);
        res.redirect('/admin')
    },

    createCategoryView: (req, res) => {
        res.locals.message = req.session.message;
        res.render('admin/createCategory', {
            title: 'Create Category | Nanni Clothes',
        });
    },

    createCategory: async (req, res) => {
        const message = '¡Categoría creada exitosamente!'
        req.session.message = message;
        const category = req.body;
        await categoryServices.createCategory(category);
        res.redirect('/admin/create')
    },

    deleteItem: async (req, res) => {
        const id = req.params.id; 
        await itemServices.deleteItem(id);
        res.redirect('/admin');
    }
}