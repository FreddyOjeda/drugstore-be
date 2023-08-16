const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    laboratory: {
        type: String,
        required: true
    },
    invima: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
}, {versionKey: false});

module.exports = mongoose.model('product', ProductSchema);