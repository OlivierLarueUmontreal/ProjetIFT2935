import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import Sequelize from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database.');
}

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);


export default app;
