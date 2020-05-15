import { awaitHandler } from '../../Utils/common.utils';

export const Test = awaitHandler((req, res) => {
  res.send({ status: true, message: 'api working' });
});

export const TestMongoDb = awaitHandler((req, res) => {
  res.send({ status: true });
});
