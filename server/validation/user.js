const Joi = require('joi');

const userRegisterSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required(),
    address: Joi.string().optional(),
    pincode: Joi.number().optional()
});

const userLoginSchema = Joi.object().keys({
    email:Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required()
});

const userPasswordUpdateSchema = Joi.object().keys({
    oldPassword: Joi.string().min(5).max(12).required(),
    newPassword: Joi.string().min(5).max(12).required(),
    email: Joi.string().email().required()
});

const userReportSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    reportmessage: Joi.string().required()
});

const userContactSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required()
});

module.exports = {
    userLoginSchema,
    userContactSchema,
    userPasswordUpdateSchema,
    userRegisterSchema,
    userReportSchema
}
