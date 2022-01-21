//Importing all the necessary modules.
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
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

//Deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API IS UP AND RUNNING");
  });
}

//Declaring Port Number on which app will listen i.e., http://localhost:5000
let port = process.env.PORT || 5000;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Server has started successfully on ${port}`);
});
