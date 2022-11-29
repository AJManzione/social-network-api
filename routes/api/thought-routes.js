const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller')

// get and post /api/thoughts
router 
.route('/')
.get(getAllThoughts)
.post(createThought)

// get put and delete for api/thoughts/:id
router 
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:thoughtsId/reaction

router
.route('/:thoughtId/reactions')
.post(addReaction)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)


module.exports = router