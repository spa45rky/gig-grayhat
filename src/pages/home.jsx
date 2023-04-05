import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { userAtom } from "../store/user.atom";
import { useNavigate } from "react-router-dom";

export default () => {
	const [username, setUsername] = useState("");
	const [user, setUser] = useAtom(userAtom);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("test");
		try {
			const res = await axios.get(`http://localhost:8000/get-user/${username}`);
			setUser(res.data.user);
			if (res.data.user.accountType == 1) {
				navigate("job-poster");
			} else {
				navigate("service-worker");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-slate-black w-full h-screen p-5 flex flex-col justify-center items-center">
			<p className="text-white text-sm font-body font-bold ml-5 text-center mb-5">
				Enter Username (try "spa45rky" or "worker")
			</p>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				onSubmit={(e) => handleSubmit(e)}
			/>
			<button
				className="bg-white text-black font-body font-bold text-sm rounded-lg px-5 py-2 mt-5"
				onClick={(e) => handleSubmit(e)}
			>
				Login
			</button>
		</div>
	);
};
