import express from 'express';
import { AppRoutes } from './router/router';

const app = express();

app.use(express.json());

const routes = AppRoutes.routes;

app.use(routes)


export default app;