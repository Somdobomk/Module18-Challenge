const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/user-controller');

// get all users and create user
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// get user by id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// add friend
router
  .route('/:userId/:friendId')
  .post(addFriend);
  .delete(deleteFriend);

module.exports = router;