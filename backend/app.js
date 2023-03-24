import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const HOSTNAME = process.env.HOSTNAME;

const client = new MongoClient(
  `mongodb://${HOSTNAME}:27017,${HOSTNAME}:27018,${HOSTNAME}:27019/?replicaSet=rs`
);
const db = client.db(DB_NAME);

const app = express();

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", function (req, res) {
  const collection = req.db.collection("default");
  const result = collection.find({});
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
