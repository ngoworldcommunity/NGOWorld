const Joi = require('joi');

const paymentSchema = Joi.object().keys({
    amount: Joi.number().required();
});

module.exports = {
    paymentSchema
};