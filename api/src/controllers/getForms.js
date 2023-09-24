const Forms = require("../models/Models");


const getForms = async (req, res) => {
  const { email } = req.body;
  console.log(req.body);

  try {
    const forms = await Forms.find({email});
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getForms };
