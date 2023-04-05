const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			// required: true,
		},
		poster: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		salary: {
			type: Number,
			required: true,
		},
		applicants: [
			{
				name: { type: String },
				// email: {type: String},
				// pfp: {type: String},
			},
		],
		location: {
			type: String,
		},
		status: {
			type: String,
			enum: ["open", "closed"],
		},
		datePosted: {
			type: Date,
			default: Date.now,
		},
		dateClosed: {
			type: Date,
		},
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Job", jobSchema);
