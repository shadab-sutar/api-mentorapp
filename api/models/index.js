const mongoose = require("mongoose");
const config = require("../../config");

let adminUserSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

const adminUserModel = mongoose.model('adminUserModel', adminUserSchema, 'adminUser');

let mentorSchema = mongoose.Schema({
    mentorID: {
        type: String
    },
    mentorName: {
        type: String
    },
    gender: {
        type: String
    },
    company: {
        type: String
    },
});

const mentorModel = mongoose.model('mentorModel', mentorSchema, 'mentor');

let taskSchema = mongoose.Schema({
    taskID: {
        type: String
    },
    taskDesc: {
        type: String
    },
    taskStart: {
        type: String
    },
    taskEnd: {
        type: String
    },
    taskStatus: {
        type: String
    },
    mentorID: {
        type: String
    }
});

const taskModel = mongoose.model('taskModel', taskSchema, 'task');

module.exports = {
    adminUserModel,
    mentorModel,
    taskModel
};
