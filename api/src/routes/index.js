const { Router } = require("express");
const {postForm} = require('../controllers/postForm')
const {getForms} = require('../controllers/getForms')
const {getFormById} = require('../controllers/getFormById')
const {fillForm} = require('../controllers/fillForm')
const {updateForm} = require('../controllers/updateForm')
const {getFilledFormbyID} = require('../controllers/getFilledForm')

const router = Router();

router.post("/newForm", postForm);
router.post("/forms", getForms);
router.post("/oneForm", getFormById);
router.post("/sendForm", fillForm);
router.post("/oneFilledForm", getFilledFormbyID);
router.put("/oneForm", updateForm);
// router.delete("/fav", deleteFav);

module.exports = router;
