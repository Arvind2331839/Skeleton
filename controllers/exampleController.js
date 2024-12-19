const Example = require('../models/ExampleModel');

// Get all examples
const getExamples = async (req, res) => {
  try {
    res.status(201).send("This is My Home Page")
  } catch (error) {
    console.log(error)
  }
};

// Create an example
const createExample = async (req, res) => {

};

module.exports = {getExamples, createExample};
