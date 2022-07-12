import express from 'express';
import bodyParse from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParse.json({ limit: "30mb", extended: true }));
app.use(bodyParse.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/post', postRoutes);
app.use('/user', userRoutes);


const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));


