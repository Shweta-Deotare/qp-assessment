import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'grocery_db',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
  port: Number(process.env.DB_PORT) || 3306,
});

export default sequelize;
