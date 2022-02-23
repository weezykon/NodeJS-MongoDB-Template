const express = require('express');
const router = express.Router();

// controllers
const goalController = require('../controllers/goalController');

// routes
router.get('/', goalController.getGoals);
router.post('/', goalController.postGoals);
router.delete('/:id', goalController.deleteGoal);
router.get('/:id', goalController.getGoal);
router.put('/:id', goalController.markGoal);

module.exports = router;