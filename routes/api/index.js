const router = require('express').Router();
const articleRoutes = require('./articles');
const userRoutes = require('./users');

// Article routes
router.use('/saved', articleRoutes);
router.use('/users', userRoutes);

module.exports = router;
