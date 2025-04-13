const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const MONGODB_URL = process.env.MONGODB_URL;

const DbConnection = () => {
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB is connected"))
        .catch((err) => {
            console.log(err);
        });
};

DbConnection();
module.exports = DbConnection;