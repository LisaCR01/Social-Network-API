const { ObjectId } = require('mongoose').Types;
const { User, World } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and remove them from the world
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : World.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
      )
      .then((world) =>
        !world
          ? res.status(404).json({
              message: 'User deleted, but no worlds found',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Update a current User by ID
  updateUsers({params, body}, res) {
  Users.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
  .then(dbUsersData => {
  if(!dbUsersData) {
  res.status(404).json({message: 'No User with this particular ID!'});
  return;
  }
  res.json(dbUserData);
  })
   .catch(err => res.json(err))
},

// Add a friend - this assumes friendships are oneway. 
createFriend({params}, res) {
  User.findOneAndUpdate({_id: params.id}, {$push: { friends: params.friendId}}, {new: true})
  .populate({path: 'friends', select: ('-__v')})
  .select('-__v')
  .then(dbUsersData => {
     if (!dbUsersData) {
        res.status(404).json({message: 'No User with this particular ID!'});
        return;
    }
  res.json(dbUsersData);
  })
  .catch(err => res.json(err));
},

// Delete a friend
deleteFriend({ params }, res) {
  User.findOneAndUpdate({_id: params.id}, {$pull: { friends: params.friendId}}, {new: true})
  .populate({path: 'friends', select: '-__v'})
  .select('-__v')
  .then(dbUsersData => {
    if(!dbUsersData) {
          res.status(404).json({message: 'No User with this particular ID!'});
          return;
    }
    res.json(dbUsersData);
  })
  .catch(err => res.status(400).json(err));
}
};
