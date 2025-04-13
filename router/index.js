import { EnterData } from '../controler/index.js'; // Use ES module import
import express from 'express';

const router = express.Router();

router.post('/enterdata', EnterData);

export default router; // Use ES module export