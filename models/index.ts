import { Sequelize, DataTypes, QueryInterface } from 'sequelize';

// Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'password',
  database: 'your_database',
});

// Use the sequelize instance for migrations and model definitions
const db: { [key: string]: any } = {};

// Initialize models here, for example:
db.User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

db.Orders = sequelize.define('Orders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

db.OrderItems = sequelize.define('OrderItems', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Orders',
      key: 'id',
    },
  },
  grocery_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Groceries',
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

db.Groceries = sequelize.define('Groceries', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
  },
  inventory: {
    type: DataTypes.INTEGER,
  },
});

// Export sequelize instance and models
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
