const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/userControllers');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route("/:userId/friends/:friendId")
.put(createFriend)
.delete(deleteFriend)

module.exports = router;
