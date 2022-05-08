const { World, Student } = require('../models');

module.exports = {
  // Get all worlds
  getWorlds(req, res) {
    World.find()
      .then((worlds) => res.json(worlds))
      .catch((err) => res.status(500).json(err));
  },
  // Get a world
  getSingleWorld(req, res) {
    World.findOne({ _id: req.params.worldId })
      .select('-__v')
      .then((world) =>
        !world
          ? res.status(404).json({ message: 'No world with that ID' })
          : res.json(world)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a world
  createWorld(req, res) {
    World.create(req.body)
      .then((world) => res.json(world))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a world
  deleteWorld(req, res) {
    World.findOneAndDelete({ _id: req.params.worldId })
      .then((world) =>
        !world
          ? res.status(404).json({ message: 'No world with that ID' })
          : Student.deleteMany({ _id: { $in: world.students } })
      )
      .then(() => res.json({ message: 'World and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a world
  updateWorld(req, res) {
    World.findOneAndUpdate(
      { _id: req.params.worldId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((world) =>
        !world
          ? res.status(404).json({ message: 'No world with this id!' })
          : res.json(world)
      )
      .catch((err) => res.status(500).json(err));
  },
};
