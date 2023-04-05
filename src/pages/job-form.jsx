import React, { useState } from "react";
import { useAtom } from "jotai";
import axios from "axios";
import { userAtom } from "../store/user.atom";

export default () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [salaryRange, setSalaryRange] = useState("");
	const [location, setLocation] = useState("");
	const [poster, setPoster] = useState("");
	const user = JSON.parse(localStorage.getItem("user"));

	console.log(user);

	const submitJob = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post("http://localhost:8000/create-job", {
				title: title,
				description: description,
				salary: salaryRange,
				location: location,
				poster: user.username,
			});
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="h-screen w-full bg-slate-black flex flex-col justify-center items-center">
			<h1 className="text-white">Job Form</h1>
			<form onSubmit={submitJob} className="flex flex-col">
				<p className="text-white">Title</p>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<p className="text-white">Description</p>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<p className="text-white">Salary</p>
				<input
					type="text"
					value={salaryRange}
					onChange={(e) => setSalaryRange(e.target.value)}
				/>
				<p className="text-white">Location</p>
				<input
					type="text"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<button
					className="mt-5 rounded-lg text-white bg-gray-700"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};
