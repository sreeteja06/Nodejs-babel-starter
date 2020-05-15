import { awaitHandler } from '../../Utils/common.utils';
import { getDB } from '../../Core/Mongodb';

export const Test = awaitHandler((req, res) => {
  res.send({ status: true, message: 'api working' });
});

export const TestMongoDb = awaitHandler(async (req, res) => {
  const db = getDB();
  const dbResp = await db.collection('db').find({}).toArray();
  res.send({ status: true, data: dbResp });
});
