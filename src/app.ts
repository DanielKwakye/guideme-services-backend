import express from 'express'
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.routes.js";
import sequelize from  "./utils/database.js";

const app = express()
// app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
app.use(bodyParser.json())

// Handling Cors Headers
app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'localhost:3000, localhost:5000');
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept");
    next()
})

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Service is running now!'})
})

app.use(authRoutes)

// Test the database connection

sequelize.authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully.");
      app.listen(8000, () => {
          console.log('Server running on port 8000')
      })
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });


