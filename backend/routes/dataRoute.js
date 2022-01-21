const express = require("express");

//Importing the functions which was creating, updating and deleting the data
const {
  createData,
  updateData,
  readData,
  readCount,
} = require("../controllers/dataController");

const router = express.Router();

//Route for reading the data
router.route("/read").get(readData);

//Route for creating the data
router.route("/create").post(createData);

//Route for Updating the data
router.route("/update").post(updateData);

//Route for counting the number of calls for api
router.route("/count").get(readCount);

//Exporting all the routes
module.exports = router;
