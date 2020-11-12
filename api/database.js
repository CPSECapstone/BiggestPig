import pgp from 'pg-promise';
import dotenv from 'dotenv';

// Should just use real env in production
if (process.env.NODE_ENV !== 'production') {
   dotenv.config();
}

const cn = {
   ssl: true,
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   database: process.env.DB_NAME,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   max: 10 // use up to 10 connections
};

const db = pgp()(cn);

export default db;
