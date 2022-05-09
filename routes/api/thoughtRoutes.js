const router = require('express').Router();

// computer uses these objects from thoughtController
const { 
    createThought, 
    removeThought,
    getThought,
    updateThought,
    createReaction,
    removeReaction
 
 } = require('../../controllers/thoughtController.js');

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(createThought);
// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route('/:id').get(getThought).put(updateThought).delete(removeThought); 
// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(createReaction);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports =router;