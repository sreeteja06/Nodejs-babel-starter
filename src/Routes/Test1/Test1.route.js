import { Router } from 'express';
import { Test } from '../../Controllers/Test1/Test1.controller';

const test1Router = Router();

test1Router.get('/', Test);

export default test1Router;
