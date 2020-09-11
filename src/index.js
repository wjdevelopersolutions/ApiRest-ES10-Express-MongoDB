import '@babel/polyfill';
import colors from 'colors';
import app from './server';


/**
 * Server start
 */
async function Main() {
    await app.listen(app.get('port'));
    console.log(`Server listener on port ${colors.green(app.get('port'))}`);
}

Main();