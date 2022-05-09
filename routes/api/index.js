const router = require('express').Router();
const worldRoutes = require('./worldRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes')

router.use('/worlds', worldRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes)

module.exports = router;