import mongoose from 'mongoose'
import { MONGO_DB_URI } from '../constants';

export const connectToDb = () => {
  console.log(MONGO_DB_URI)
  mongoose.set('strictQuery', false);

  mongoose.connect(MONGO_DB_URI as string, {
    serverSelectionTimeoutMS: 5000
  }).then(() => {
    console.log('**** CONNECTED WITH DB ****');
  }).catch(err => {
    console.log('**** DB CONNECTION FAILURE ****');
    console.error(err);
  });
};

export const removeExtencion = (filename: string) => {
  return filename.split('.').shift()
}
