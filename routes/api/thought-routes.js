const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, deleteReaction, addReaction} = require('../../controllers/thought-controller');

// router with no id
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// router with thought it
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// router with reaction
router
  .route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;