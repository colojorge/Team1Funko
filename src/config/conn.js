import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    port: process.env.PORTDB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const conn = pool.promise();

export default conn;