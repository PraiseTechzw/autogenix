import mongoose, { Mongoose } from 'mongoose';

// Ensure MONGODB_URL is defined
const MONGODB_URL = process.env.MONGODB_URL as string;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Type for global object to avoid 'any'
interface NodeJSGlobal {
  mongoose?: MongooseConnection;
}

// Disable the ESLint rule for this specific line
/* eslint-disable prefer-const */
let cached: MongooseConnection = (global as NodeJSGlobal).mongoose || {
  conn: null,
  promise: null,
};
/* eslint-enable prefer-const */


export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'AutoGenix',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
