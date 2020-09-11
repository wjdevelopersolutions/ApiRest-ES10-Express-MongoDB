import MongoClient, { connect } from 'mongodb';
import colors from 'colors';


export async function mongoConnect() {

    try {
         const client = await MongoClient.connect('mongodb://localhost:27017', 
         {  useUnifiedTopology: true });
         const db = client.db('news');
         console.log(`Connected to MongoDB successfull!`);
         return db;
    } catch (error) {
         throw new Error(`${error}`);
    }
}