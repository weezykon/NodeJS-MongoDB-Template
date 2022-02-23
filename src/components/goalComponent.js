const Goal = require('../models/Goals');

// fetch all goals
const getGoals = async () => {
    const goals = await Goal.find({ active: true });
    return goals;
};

// create a new goal
const postGoals = async (data) => {
    const goal = await Goal.create({
        title: data.title,
    });
    return goal;
}

// delete a goal
const deleteGoal = async (id) => {
    const goal = await Goal.findByIdAndUpdate(id, { active: false });
    return goal;
}

// fetch a goal by id
const fetchGoal = async (id) => {
    // get goal where id matches and active is true
    const goal = await Goal.findOne({ _id: id, active: true });
    return goal;
}

// maek a goal complete
const markGoal = async (goal) => {
    goal.status = 'complete';
    await goal.save();
    return true;
}

module.exports = {
    getGoals,
    postGoals,
    deleteGoal,
    fetchGoal,
    markGoal
}