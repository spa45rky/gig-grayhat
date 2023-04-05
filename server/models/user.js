const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		accountType: {
			// 1 = job poster, 0 = service worker, we can refactor this later if we want to add more account types (ie: admin)
			type: Number,
			enum: [1, 0],
		},
		jobsPosted: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Job",
			},
		],
		jobsApplied: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Job",
			},
		],
	},
	{ versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
