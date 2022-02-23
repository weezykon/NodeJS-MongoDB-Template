const Joi = require('@hapi/joi');

const validateGoalsEntry = (data) => {
    const schema = {
        title: Joi.string().min(5).max(400).required(),
    };
    return Joi.validate(data, schema);
};

const validateId = (data) => {
    const schema = {
        id: Joi.string().min(16).required(),
    };
    return Joi.validate(data, schema);
};

module.exports = {
    validateGoalsEntry,
    validateId
}