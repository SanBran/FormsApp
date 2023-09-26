const {FilledForms} = require("../models/Models");


const getFilledFormbyID = async (req, res) => {
  const { _id } = req.body;

  try {
    const form = await FilledForms.findById(_id);
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getFilledFormbyID };
