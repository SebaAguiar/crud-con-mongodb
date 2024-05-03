import { config } from 'dotenv';
config();

const LOCAL = false;

export const PORT = process.env.PORT || 3001;

export const MONG_DB_USER = process.env.MONGO_DB_USER;

export const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;

export const MONGO_DB_URI = LOCAL
  ? process.env.LOCAL_DB_URI
  : process.env.MONGO_DB_URI;
