const express = require("express");
const dotenv = require("dotenv");
const {
  bookingData,
  genres,
  langs,
  locs,
  upcomingMovies,
  runningMovies,
} = require("./data");
dotenv.config();

const bookings = [...bookingData];

const app = express();

app.use(express.json());

app.get("/bookings", (req, res) => {
  res.json(bookings);
});
app.post("/registerBooking", (req, res) => {
  const data = req.body;
  bookings.push(data);
  res.json(bookings);
});

app.get("/genres", (req, res) => {
  res.json(genres);
});

app.get("/languages", (req, res) => {
  res.json(langs);
});

app.get("/locations", (req, res) => {
  res.json(locs);
});

app.get("/upcommingfilms", (req, res) => {
  res.json(upcomingMovies);
});

app.get("/runningMovies", (req, res) => {
  res.json(runningMovies);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`API Running on ${PORT}`);
});
