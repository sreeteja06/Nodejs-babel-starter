import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import test1Router from './Routes/Test1/Test1.route';
import { connectDB } from './Core/Mongodb';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.use('/test', test1Router);

const PORT = process.env.PORT || 4000;

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Started up at port http://localhost:${PORT}/`);
  });
})();
