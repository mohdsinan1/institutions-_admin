const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    softwares: {
        type: [String], // Array of software names
        required: true
    },
});

module.exports = mongoose.model('Course', CourseSchema);
