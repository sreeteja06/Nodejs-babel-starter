import { Router } from 'express';
import { Test, TestMongoDb } from '../../Controllers/Test1/Test1.controller';
import { ReqSchemaValidation } from '../../Middleware/ReqSchemaValidation.middleware';

const test1Router = Router();

test1Router.get('/', Test);

test1Router.get('/mongodb', ReqSchemaValidation, TestMongoDb);

export default test1Router;
