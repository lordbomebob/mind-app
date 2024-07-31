const router = require('express').Router();
let story = require('../models/story.model');
let chapter = require(`../models/chapter.model`)
const storyController = require(`../controller/story.controller`)
router.get(`/`,storyController.getStory)

//post story
router.post('/tell',storyController.storyBeginning)
//post chapter
router.post(`/tell/chapter`,storyController.addChapter)


module.exports = router;