const Forms = require("../models/Models");


const getFormById = async (req, res) => {
  const { _id } = req.body;

  try {
    const form = await Forms.findById(_id);
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getFormById };
