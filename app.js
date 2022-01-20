//Importing all the necessary modules.
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const connectDB = require("./backend/config/db");

//Importing route from the route file for setting up the route
const dataRoute = require("./backend/routes/dataRoute");

//Initializing App
const app = express();
dotenv.config();
connectDB();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: "THis is the little secret",
    resave: false,
    saveUninitialized: false,
  })
);

//Setting Up Route for Creating and Updating Data
app.use("/api", dataRoute);

//Declaring Port Number on which app will listen i.e., http://localhost:5000
let port = process.env.PORT || 5000;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Server has started successfully on ${port}`);
});
