const { MongoClient } = require('mongodb');

let dbObj;

export const connectDB = () =>
  new Promise((resolve, reject) => {
    try {
      if (dbObj) {
        resolve(dbObj.db('teller'));
      } else {
        MongoClient.connect(process.env.DB_URI, (err, db) => {
          if (err) {
            console.log(err);
            process.exit(1);
          }
          dbObj = db.db('teller');
          console.log('connected successfully to db');
          resolve(dbObj);
        });
      }
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });

export const getDB = () => {
  if (dbObj) {
    return dbObj;
  }
  console.error('db not connected');
  return new Error('DB not connected');
};

export const disconnectDB = () => dbObj.close();
