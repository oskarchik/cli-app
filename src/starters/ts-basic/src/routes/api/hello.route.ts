import { Router } from 'express';
import { getHellos } from '../../controllers/hello.controller';
export const helloRouter = Router();

helloRouter.get('/', getHellos);
