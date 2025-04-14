import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbconnection from './connection.js';
import router from './router/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    dbconnection();
});
