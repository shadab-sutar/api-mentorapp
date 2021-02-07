const controller = require("../controller");
module.exports = app => {
    let rootPath = "/api/mentor/v1";
    app.get(rootPath + "/getMentors", controller.getMentors);
    app.post(rootPath + "/saveMentor", controller.saveMentor);
    app.put(rootPath + "/updateMentor", controller.updateMentor);
    app.delete(rootPath + "/deleteMentor", controller.deleteMentor);
    app.post(rootPath + "/newTask", controller.newTask);
    app.put(rootPath + "/updateTask", controller.updateTask);
};