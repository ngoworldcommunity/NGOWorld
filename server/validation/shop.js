const Joi = require('joi');

const addProductSchema = Joi.object().keys({
    productType: Joi.string().required(),
    productName: Joi.string().required(),
    productPrice: Joi.number().required(),
    productDescription: Joi.string().required(),
    productImage: Joi.string().required(),
    productQty: Joi.number().required(),
    productSlug: Joi.string().required()
});

module.exports = {
    addProductSchema
}