import '@babel/polyfill';
import colors from 'colors';
import app from './server';

/**
 * MongoDB connection
 */
import { mongoConnect } from './util/database';


/**
 * Server and mongodb start
 */
mongoConnect( async () => {
    await app.listen(app.get('port'));
    console.log(`Server listener on port ${colors.green(app.get('port'))}`);
});
