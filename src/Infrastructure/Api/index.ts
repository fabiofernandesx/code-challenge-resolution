import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import setupRoutes from './setupRoutes';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const app = express();

app.use(json());
app.use(cors());
setupRoutes(app);

export default app;
