import express from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database";

console.log('Current directory:', __dirname);
console.log('Resolved path to database.ts:', require.resolve('./config/database'));

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (res: any) => res.send('Welcome to the Grocery Booking API!'));

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
});
