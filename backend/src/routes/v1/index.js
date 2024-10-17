const express = require('express');
const router = express.Router();

const userRoutes = require('./user-routes');
const hazardRoutes = require('./hazards-routes');
const notifyRoutes = require('./notify-routes');

router.use('/user', userRoutes);
router.use('/hazard', hazardRoutes);
router.use('/notify', notifyRoutes);
module.exports = router;
