const { Router } = require("express");
const {postForm} = require('../controllers/postForm')
const {getForms} = require('../controllers/getForms')
const {getFormById} = require('../controllers/getFormById')

const router = Router();

router.post("/newForm", postForm);
router.post("/forms", getForms);
router.post("/oneForm", getFormById);
// router.delete("/fav", deleteFav);

module.exports = router;
