const {FilledForms} = require('../models/Models')

const fillForm = async (req, res) => {
  
  try {
    const formData = {
      form: req.body.form,
    };

    const form = await FilledForms.create(formData);

    res.status(200).json({
      form,
      message: "Form sended!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { 
    fillForm,
};
