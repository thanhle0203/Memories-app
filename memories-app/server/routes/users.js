import { sign } from 'core-js/core/number';
import express from 'express';

import { signin, signup } from '../controllers/posts.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/sigup', signup);

export default router;