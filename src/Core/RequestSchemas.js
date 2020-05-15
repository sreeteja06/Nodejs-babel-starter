const Joi = require('@hapi/joi');

const TestMongoDB = Joi.object({
  id: Joi.string().required(),
});

const Schemas = {
  'get:/test/mongodb': TestMongoDB,
};

export default Schemas;
