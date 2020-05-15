import { awaitHandler } from '../../Utils/common.utils';

export const Test = awaitHandler((req, res) => {
  res.send({ status: true, message: 'api working' });
});
