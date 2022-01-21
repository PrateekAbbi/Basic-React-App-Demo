const asyncHandler = require("express-async-handler");
const Data = require("../models/dataModel");
let count = 0;

//Function for Creating the data
const createData = asyncHandler(async (req, res) => {
  const { content } = req.body;

  //Finding any previous data
  const previousData = await Data.findOne({ _id: 1 });
  console.log(previousData);

  if (previousData) {
    //Clearing the previous data before creating new entry!!
    await previousData.remove();
    console.log("Data removed Successfully");
  }

  const dummyData = await Data.create({ content });
  console.log(dummyData);

  if (dummyData) {
    count++;
    res.status(201).json({
      _id: dummyData._id,
      content: dummyData.content,
    });
  } else {
    res.status(400);
    throw new Error("Could not add data, please try again!!");
  }
});

//Function for Reading the data
const readData = asyncHandler(async (req, res) => {
  const dummyData = await Data.findOne();

  if (dummyData) {
    res.status(201).json(dummyData);
  } else {
    res.status(400).json({ message: "Data not found" });
  }
});

//Function for Updating the data
const updateData = asyncHandler(async (req, res) => {
  const { content } = req.body;

  const dummyData = await Data.findOne({ _id: 1 });
  console.log(dummyData);

  if (dummyData) {
    count++;
    dummyData.content = content;
    const updatedDummyData = await dummyData.save();
    res.status(201).json(updatedDummyData);
  } else {
    res.status(400);
    throw new Error("Data not found");
  }
});

//Function for Reading the API calls
const readCount = asyncHandler(async (req, res) => {
  return res.json({
    count,
  });
});

//Exporting the functions
module.exports = { createData, readData, updateData, readCount };
