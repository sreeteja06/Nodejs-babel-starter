export const awaitHandler = (fn) => {
  return async (req, res, next) => {
    try {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      await fn(req, res, next);
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
};
