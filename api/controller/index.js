const allModels = require("../models");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

exports.saveMentor = (req, res) => {
    if (req.body) {
        let payload = req.body;
        payload.mentorID = uuidv4();
        let mentorCreate = allModels.mentorModel;
        const query = new mentorCreate(payload);
        query.save((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(`Mentor created successfully...`);
            }
        });
    } else {
        res.status(400).send(`Payload cannot be empty`);
    }
};

exports.updateMentor = (req, res) => {
    if (req.body) {
        let mentorUpdate = allModels.mentorModel;
        mentorUpdate.findOne({ mentorID: req.body.mentorID }, (err, data) => {
            if (err) {
                res.status(400).send(err);
            }
            if (data) {
                data.mentorID = req.body.mentorID;
                data.mentorName = req.body.mentorName;
                data.gender = req.body.gender;
                data.company = req.body.company;
                data.save();
                res.status(200).send(`Mentor details updated successfully...`);
            }
        });
    }
};

exports.deleteMentor = (req, res) => {
    let mentorID = req.query.mentorID;
    let mentor = allModels.mentorModel;
    const deleteMentor = new mentor();
    deleteMentor.deleteOne({ mentorID }, (err, data) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).send(`Mentor deleted successfully...`);
    });
};

exports.getMentors = (req, res) => {
    allModels.mentorModel.find().sort({ "_id": -1 }).exec((err, data) => {
        if (data.length > 0) {
            res.status(200).send(data);
        } else {
            res.status(400).send(`No mentor data found...`);
        }
    });
};

exports.newTask = (req, res) => {
    if (req.body) {
        let payload = req.body;
        payload.taskID = uuidv4();
        let taskCreate = allModels.taskModel;
        const query = new taskCreate(payload);
        query.save((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(`Task created successfully...`);
            }
        });
    } else {
        res.status(400).send(`Payload cannot be empty`);
    }
};

exports.updateTask = (req, res) => {
    if (req.body) {
        let taskUpdate = allModels.taskModel;
        taskUpdate.findOne({ taskID: req.body.taskID }, (err, data) => {
            if (err) {
                res.status(400).send(err);
            }
            if (data) {
                data.taskID = req.body.taskID;
                data.mentorID = req.body.mentorID;
                data.taskDesc = req.body.taskDesc;
                data.taskStart = req.body.taskStart;
                data.taskEnd = req.body.taskEnd;
                data.taskStatus = req.body.taskStatus;
                data.save();
                res.status(200).send(`task details updated successfully...`);
            }
        });
    }
};