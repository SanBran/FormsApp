const { Router } = require("express");
const {postForm} = require('../controllers/postForm')
const {getForms} = require('../controllers/getForms')

const router = Router();

router.post("/newForm", postForm);
router.post("/forms", getForms);
// router.delete("/fav", deleteFav);

module.exports = router;
