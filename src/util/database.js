import MongoClient from 'mongodb';
import colors from 'colors';

let _db;
const url = 'mongodb://localhost:27017';
const dbName = 'test';

const mongoConnect = callback => {
    MongoClient.connect(url, { useUnifiedTopology: true })
               .then( client => {
                   console.log(`Connected successfully to ${colors.blue('MongoDB!')}`);
                   _db = client.db(dbName);
                   callback();
               })
               .catch(error => {
                   console.error(`${error}`);
                   throw new Error(`${error}`);
                });
}

const getDB = () => {
    if (_db) {
        return _db;
    } 
    throw new Error(`Error: No database found!`);
} 

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;