const Joi = require('joi');

const clubRegisterSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required(),
    address: Joi.string().required(),
    pincode: Joi.number().required(),
    description: Joi.string().required(),
    tagLine: Joi.string().required()
});

const clubLoginSchema = Joi.object().keys({
    email:Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required()
});

const clubEventSchema = Joi.object().keys({
    eventname: Joi.string().required(),, 
    eventlocation: Joi.string().required(),, 
    eventdate: Joi.string().required(),, 
    eventdescription: Joi.string().required()
});

module.exports = {
    clubEventSchema,
    clubLoginSchema,
    clubRegisterSchema
}
