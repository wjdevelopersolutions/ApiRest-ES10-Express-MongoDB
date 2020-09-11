require('dotenv').config();
import express from 'express';
const app = express();

/**
 * Settings
 */
app.set('port', process.env.PORT || 3000);

/**
 * Routes
 */
import indexRoutes from './routes/index.routes';

app.use(indexRoutes);


export default app;

