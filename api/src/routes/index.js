const { Router } = require("express");
const {postForm} = require('../controllers/postForm')
const {getForms} = require('../controllers/getForms')
const {getFormById} = require('../controllers/getFormById')
const {fillForm} = require('../controllers/fillForm')

const router = Router();

router.post("/newForm", postForm);
router.post("/forms", getForms);
router.post("/oneForm", getFormById);
router.post("/sendForm", fillForm);
// router.delete("/fav", deleteFav);

module.exports = router;
