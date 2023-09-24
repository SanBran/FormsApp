const {FilledForms} = require('../models/Models')

const updateForm = async (req, res) => {
const {_id, form} =req.body
    console.log(req.body);
  try {
    const updatedData = {
      $set: {
        form : form
      }
    };
   
    const newForm = await FilledForms.findByIdAndUpdate(_id,updatedData, { new: true});

    res.status(200).json({
      newForm,
      message: "Form Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { 
    updateForm,
};
