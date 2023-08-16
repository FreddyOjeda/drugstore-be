const Category = require('../../models/category');

const index = async (req, res) => {

    try {

        const categories = await Category.find();

        return res.json({
            status: true,
            message: 'Listado de categorías',
            categories
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible obtener las categorías'
        });

    }

};

const show = async (req, res) => {

    const {id} = req.params;

    try {

        const category = await Category.findById(id);

        if (category === null) {
            return res.json({
                status: false,
                message: 'La categoría no existe',
            });
        }

        return res.json({
            status: true,
            message: 'Categoría por ID',
            category
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible obtener la categoría'
        });

    }

};

const store = async (req, res) => {

    const {name, description} = req.body;

    try {

        const category = await Category.create({name, description});

        return res.json({
            status: true,
            message: 'Se ha creado una nueva categoría',
            category
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible crear la categoría'
        });

    }

};

const update = async (req, res) => {

    const {id} = req.params;
    const {name, description} = req.body;

    try {

        const category = await Category.findByIdAndUpdate(id, {name, description}, {new: true});

        if (category === null) {
            return res.json({
                status: false,
                message: 'La categoría no existe',
            });
        }

        return res.json({
            status: true,
            message: 'Se ha actualizado la categoría correctamente',
            category
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible actualizar la categoría'
        });

    }
};

const destroy = async (req, res) => {

    const {id} = req.params;

    try {

        const category = await Category.findByIdAndDelete(id);

        if (category === null) {
            return res.json({
                status: false,
                message: 'La categoría no existe',
            });
        }

        return res.json({
            status: true,
            message: 'Se ha eliminado la categoría correctamente',
            category
        });

    } catch (error) {

        return res.json({
            status: false,
            message: 'No ha sido posible eliminar la categoría'
        });

    }

};

module.exports = {index, show, store, update, destroy};