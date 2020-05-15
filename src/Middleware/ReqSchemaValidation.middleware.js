import Schemas from '../Core/RequestSchemas';

export const ReqSchemaValidation = async (req, res, next) => {
  const route = req.baseUrl + req.path;

  const method = req.method.toLowerCase();

  const data = method === 'get' ? req.query : req.body;

  const schemaRoute = `${method}:${route}`;

  const schema = Schemas[schemaRoute];

  if (schema) {
    const { error } = schema.validate(data);
    if (error) {
      return res.send({ status: false, message: error.message });
    }
  }
  return next();
};
