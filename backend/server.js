const express = require("express");
const morgan = require("morgan");
const db = require("./db/index");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/v1/restaurants", async (req, res) => {
  const { name, location, price_range } = req.body;

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name,location, price_range) values ($1,$2,$3) returning *",
      [name, location, price_range]
    );

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/v1/businesses/:id", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants where id =$1", [
      req.params.id,
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
  }
});

app.put("/api/v1/restaurants/:id", async (req, res) => {
  const { name, location, price_range } = req.body;

  try {
    const results = await db.query(
      "UPDATE restaurants SET name =$1 ,location =$2, price_range=$3 where id =$4 returning * ",
      [name, location, price_range, req.params.id]
    );

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
  }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const results = await db.query(
      "DELETE FROM restaurants where id =$1",
      [req.params.id]
    );

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
  }

});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
