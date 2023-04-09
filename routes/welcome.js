import express from 'express';
import { welcome } from '../handlers/welcome.handler';

export const router = express.Router();

router.get('/', welcome);
