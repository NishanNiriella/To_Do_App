const router = require("express").Router();
const taskController = require("../controllers/task.controller");

module.exports = () => {
    router.post("/create", taskController.createTask);
    router.get("/", taskController.getAllTasks);
    router.get("/:id", taskController.getTaskById);
    router.patch("/:id", taskController.updateTask);
    router.delete("/:id", taskController.deleteTask);
    return router;
}