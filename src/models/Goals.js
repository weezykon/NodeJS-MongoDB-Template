const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: false, default: 'incomplete' },
    active: { type: Boolean, required: false, default: true },
},{
    timestamps: true
});

module.exports = mongoose.model('Goal', goalSchema);
