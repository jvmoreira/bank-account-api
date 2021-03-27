import mongoose from 'mongoose';

const uri: string = process.env.DATABASE_CONNECTION_URI || '';

export async function connectDatabase(): Promise<void> {
  console.log('Connecting to database...');

  return new Promise((resolve, reject) => {
    mongoose.connect(uri, (error: any) => {
      if (error) {
        console.log(`Error to connect to database: ${error.message}`);
        reject(error);
      } else {
        console.log('Connected to database');
        resolve();
      }
    });
  });
}
