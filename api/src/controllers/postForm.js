const Forms = require('../models/Models')

const postForm = async (req, res) => {
  
  try {
    const formData = {
      email: req.body.email,
      form: req.body.file,
    };

    const newForm = await Forms.create(formData);

    res.status(200).json({
      message: "Form created!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { 
  postForm,
};
