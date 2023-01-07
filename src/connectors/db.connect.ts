import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { config } from '../config/config.js';
dotenv.config();

mongoose.set('strictQuery', false);
// mongo db connect
mongoose
  .connect(config.mongo.url, { retryWrites: true, writeConcern: { w: 'majority', j: true } })
  .then(() => {
    console.log('Connected to DB ...');
  })
  .catch((error) => {
    console.log('Error connecting to DB: ' + error);
  });

export default mongoose;
