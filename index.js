import express from 'express';
import cors from 'cors';
import dbconnection from './connection.js';
import dotenv from 'dotenv';
import router from './router/index.js'; // Import the router

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Use the router for handling routes
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    dbconnection();
});