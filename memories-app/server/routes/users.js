
import express from 'express';

import { signin, signup } from '../controllers/user';

const router = express.Router();

router.post('/signin', signin);
router.post('/sigup', signup);

export default router;