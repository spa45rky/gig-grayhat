const Job = require("../models/jobs");

exports.createJob = async (req, res) => {
	console.log(req.body);
	const { title, description, poster, salary, location } = req.body;

	try {
		const job = await Job.create({
			title,
			description,
			poster,
			salary,
			location,
			status: "open",
		});
		res.status(201).json({ job });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getJobs = async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(200).json({ jobs });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getAssignedJobs = async (req, res) => {
	try {
		const jobs = await Job.find({ poster: req.params.id });
		res.status(200).json({ jobs });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
