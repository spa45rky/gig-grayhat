const express = require("express");

const apiRouter = express.Router();

const jobController = require("../controllers/jobController");
const userController = require("../controllers/userController");

apiRouter.post("/create-job", jobController.createJob);

apiRouter.get("/get-jobs", jobController.getJobs);

// routes are unprotected for now, we can add middleware later
apiRouter.get("/get-assigned-jobs/:id", jobController.getAssignedJobs);

apiRouter.get("/get-user/:id", userController.getSpecificUser);

apiRouter.post("/create-user", userController.createUser);

apiRouter.get("/", (req, res) => {
	res.send("API is working properly");
});

module.exports = apiRouter;
