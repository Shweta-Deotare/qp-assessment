import { SequelizeOptions } from 'sequelize-typescript';
import User from "../models/User";
import Orders from "../models/Orders";

const config: SequelizeOptions = {
  username: 'root',
  password: 'root',
  database: 'grocery_db',
  host: '127.0.0.1',
  dialect: 'mysql',
  models: [User, Orders],  
};

export default config;