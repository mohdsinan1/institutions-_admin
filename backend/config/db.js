const mongoose = require('mongoose')
require('dotenv').config()

const DB_CONN_STRING = process.env.DATABASE_URL

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(DB_CONN_STRING);
        console.log('mongoDb connected success');


    } catch (error) {
        console.log('it not connected');
        process.exit(1)
    }
}



mongoose.connection.on('error', (error) => {
    console.error('DB error:', error);
});

mongoose.connection.once('open', () => {
    console.log('Database connected');
});

module.exports = connectdb