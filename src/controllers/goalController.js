const asyncHandler = require('express-async-handler');

// components
const goalComponent = require('../components/goalComponent');

// validation
const validation = require('../middleware/validation');
// get goals
exports.getGoals = asyncHandler( async (req, res) => {
    try {
        const goals = await goalComponent.getGoals();
        // return goals
        res.status(200).json({
            status: 'success',
            message: 'Goals fetched successfully',
            data: goals
        });
    }
    catch (err) {
        throw err;
    }
});

// post goals
exports.postGoals = asyncHandler( async (req, res) => {
    try {
        // validate data
        const { error } = validation.validateGoalsEntry(req.body);
        if (error) {
            res.status(400);
            throw new Error(error.details[0].message);
        }
        // create goal
        const goal = await goalComponent.postGoals(req.body);
        // return goal
        res.status(201).json({
            status: 'success',
            message: 'Goal created successfully',
            data: goal
        });
    }
    catch (err) {
        throw err;
    }
});

// delete goal
exports.deleteGoal = asyncHandler( async (req, res) => {
    try {
        // validate data
        const { error } = validation.validateId(req.params);
        if (error) {
            res.status(400);
            throw new Error(error.details[0].message);
        }
        // delete goal
        const goal = await goalComponent.deleteGoal(req.params.id);
        // return goal
        res.status(200).json({
            status: 'success',
            message: 'Goal deleted successfully',
        });
    }
    catch (err) {
        throw err;
    }
});

exports.getGoal = asyncHandler( async (req, res) => {
    try {
        // validate data
        const { error } = validation.validateId(req.params);
        if (error) {
            res.status(400)
            throw new Error(error.details[0].message);
        }
        // fetch goal
        const goal = await goalComponent.fetchGoal(req.params.id);
        if(!goal) {
            res.status(404)
            throw new Error('Goal not found');
        }
        // return goal
        res.status(200).json({
            status: 'success',
            message: 'Goal fetched successfully',
            data: goal
        });
    }
    catch (err) {
        throw err;
    }
});

exports.markGoal = asyncHandler( async (req, res) => {
    try {
        // validate data
        const { error } = validation.validateId(req.params);
        if (error) {
            res.status(400);
            throw new Error(error.details[0].message);
        }
        // fetch goal
        const goal = await goalComponent.fetchGoal(req.params.id);
        // mark goal
        const updatedGoal = await goalComponent.markGoal(goal);
        // return goal
        res.status(200).json({
            status: 'success',
            message: 'Goal marked completed successfully',
            data: goal
        });
    }
    catch (err) {
        throw err;
    }
});
