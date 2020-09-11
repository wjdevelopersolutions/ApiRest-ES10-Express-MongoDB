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
import newsRoutes from './routes/news.routes';

app.use(indexRoutes);
app.use('/news', newsRoutes);


export default app;

