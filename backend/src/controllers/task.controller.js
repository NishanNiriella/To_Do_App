const Task = require("../models/task.model");
const mongoose = require("mongoose");

const createTask = async (req, res) => {
    if(req.body) {
        const task = new Task(req.body);
        await task.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message })
            });
    }
}

const getAllTasks = async (req, res) => {
    await Task.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error });
        });
}


const updateTask = async (req, res) => {
    if(req.params && req.params.id) {
        const { id } = req.params; // fetching the id of the task using params
        const task = req.body;

        // validating the task id
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No Task with the id: ${id}`);

        // find and update the task
        const updatedTask = await Task.findByIdAndUpdate(id, task, {new: true});
        res.json(updatedTask);
    }
}

const deleteTask = async (req, res) => {
    if(req.params && req.params.id) {
        const { id } = req.params; // fetching id of the task using params
        // validating the task id
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No Task with the id: ${id}`);

        // find and delete the task
        await Task.findByIdAndDelete(id);
        res.json({ message: "Task successfully deleted!"});
    }
}

const getTaskById = async (req, res) => {
    if(req.params && req.params.id) {
        const { id } = req.params; // fetching id of the task using params
        // validating the task id
        if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No Task with the id: ${id}`);

        await Task.findById(id)
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
    getTaskById,
}