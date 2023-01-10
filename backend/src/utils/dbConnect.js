const mongoose = require('mongoose');

const dbConnect = () => {
    const MONGODB_URL = process.env.MONGODB_URL;

    // database connection
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if(error) {
            console.log('Database Error: ', error.message);
        }
    });

    // Openning the connection
    mongoose.connection.once('open', () => {
        console.log('Database Synced');
    });
}

module.exports = {
    dbConnect,
}