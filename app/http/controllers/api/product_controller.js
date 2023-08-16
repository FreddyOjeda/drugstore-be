const Product = require('../../models/product');
const Category = require('../../models/category');

const index = async (req, res) => {

    try {

        const products = await Product.find().populate('category');

        return res.json({
            status: true,
            message: 'Listado de productos',
            products
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible obtener los productos'
        });

    }

};

const show = async (req, res) => {

    const {id} = req.params;

    try {

        const product = await Product.findById(id);

        if (product === null) {
            return res.json({
                status: false,
                message: 'El producto no existe',
            });
        }

        await product.populate('category');

        return res.json({
            status: true,
            message: 'Producto por ID',
            product
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible obtener el producto'
        });

    }

};

const store = async (req, res) => {

    const {category_id} = req.params;
    const {name, description, laboratory, invima, batch, expiration_date, price} = req.body;

    try {

        const category = await Category.findById(category_id);

        if (category === null) {
            return res.json({
                status: false,
                message: 'No se ha podido crear el producto, la categoría no existe',
            });
        }

        const product = await new Product(
            {name, description, laboratory, invima, batch, expiration_date, price, category: category['_id']}
        );

        await product.save();

        return res.json({
            status: true,
            message: 'Se ha creado un nuevo producto',
            product
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible crear el producto'
        });

    }

};

const update = async (req, res) => {

    const {id, category_id} = req.params;
    const {name, description, laboratory, invima, batch, expiration_date, price} = req.body;

    try {

        const category = await Category.findById(category_id);

        if (category === null) {
            return res.json({
                status: false,
                message: 'No se ha podido actualizar el producto, la categoría no existe',
            });
        }

        const product = await Product.findByIdAndUpdate(
            id,
            {name, description, laboratory, invima, batch, expiration_date, price, category: category['_id']},
            {new: true}
        );

        return res.json({
            status: true,
            message: 'Se ha actualizado el producto correctamente',
            product
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible actualizar el producto'
        });

    }
};

const destroy = async (req, res) => {

    const {id} = req.params;

    try {

        const product = await Product.findByIdAndDelete(id);

        if (product === null) {
            return res.json({
                status: false,
                message: 'El producto no existe',
            });
        }

        return res.json({
            status: true,
            message: 'Se ha eliminado el producto correctamente',
            product
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible eliminar el producto'
        });

    }

};

module.exports = {index, show, store, update, destroy}