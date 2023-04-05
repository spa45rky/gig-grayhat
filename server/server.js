const { mongoose } = require("mongoose");
require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT || 8000;

const connect_db = async () => {
	try {
		await mongoose.connect(URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Database connected");
	} catch (error) {
		console.log("error:" + error);
	}

	const app = require("./app");

	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
};

connect_db();
