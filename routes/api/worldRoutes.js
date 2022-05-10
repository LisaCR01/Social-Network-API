const router = require('express').Router();
const {
  getWorlds,
  getSingleWorld,
  createWorld,
  updateWorld,
  deleteWorld,
} = require('../../controllers/worldControllers.js');

// /api/worlds
router.route('/').get(getWorlds).post(createWorld);

// /api/worlds/:worldId
router
  .route('/:worldId')
  .get(getSingleWorld)
  .put(updateWorld)
  .delete(deleteWorld);

module.exports = router;
