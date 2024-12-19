const Example = require('../models/ExampleModel');

const fetchExampleById = async (id) => {
  return await Example.findById(id);
};

module.exports = { fetchExampleById };
