const { postForm } = require("../controllers/postForm");

const newForm = async (req, res) => {
  const { email, form } = req.body;
console.log('handler');
  try {
    const form = await postForm(req.body);
    if (form.state) {
      res.status(200).json(form);
    } else {
      res.status(400).json(form);
    }
  } catch (error) {
    // console.log(error)
    res.status(500).json(error);
  }
};

module.exports = {
  newForm,
};
