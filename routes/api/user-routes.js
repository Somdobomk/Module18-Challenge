const router = require('express').Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../controllers/user-controller');

// GET all users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// GET user by id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// POST add friend
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

  module.exports = router;