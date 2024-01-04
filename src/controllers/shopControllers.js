const itemServices = require('../services/itemServices')
const categoryServices = require('../services/categoryServices');

module.exports = {
    shopView: async (req, res) => {
        const { data } = await itemServices.getAllItems();
        const categories = await categoryServices.getCategories();
        const filterByCategory = {};
        data.forEach(product => {
            id = product.category_id;
            if (!filterByCategory[id]) {
                filterByCategory[id] = [];
            }
            filterByCategory[id].push(product);
        });
        res.render('home', {
            title: 'Home | Nanni Clothes',
            items: data,
            categories: categories.data,
            filterByCategory
        })
    },

    detailView: async (req, res) => {
        const id = req.params.id;
        const item = await itemServices.getOneItem(id);
        const { data } = item;
        if (!data.length) {
            return res.status(404).redirect('/home');
        }
        const cat_id = data[0].category_id;
        const { relatedItems } = await itemServices.getRelated(cat_id);
        res.render('shop/detail', {
            title: 'Detail | Nanni Clothes',
            item: data[0],
            related: relatedItems
        })
    },

    checkoutView: (req, res) => {
        res.render('shop/checkout', {
            title: 'Checkout | Nanni Clothes'
        });
    },

    search: async (req, res) => {
        const name = req.body.filterWord.toLowerCase();
        const { data } = await itemServices.getAllItems();
        const filtered = data.filter(item => 
           item.product_name.toLowerCase().includes(name)
        );
        res.json(filtered);
    }
}