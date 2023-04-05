const User = require("../models/user");

exports.createUser = async (req, res) => {
	console.log(req.body);
	const { username, name, accountType } = req.body;

	try {
		const user = await User.create({
			username,
			name,
			accountType,
		});
		res.status(201).json({ user });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// future reference for admin accounts: api for getting all registered users
exports.getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({ users });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getSpecificUser = async (req, res) => {
	console.log(req.params);
	try {
		const user = await User.findOne({ username: req.params.id });
		res.status(200).json({ user });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
