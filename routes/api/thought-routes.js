const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtbyId,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// api get
router
.route('/')
.get(getAllThoughts)
.post(createThought);

// api get one
router
.route('/:id')
.get(getThoughtbyId)
.put(updateThought)
.delete(deleteThought);

// api thoughts
router
.route('/:thoughtId/reactions')
.post(createReaction);

router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;