import React, { useEffect } from "react";
import Pfp from "../media/pfp.png";
import TwoToneCard from "../components/twotone-card";
import RainbowCard from "../components/rainbow-card";
import { useAtom } from "jotai";
import { jobsAtom } from "../store/jobs.atom";
import { assignedJobsAtom } from "../store/assigned_jobs.atom";
import axios from "axios";

export default () => {
	// global state for all jobs fetched from db
	const [jobs, setJobs] = useAtom(jobsAtom);

	useEffect(() => {
		getJobs();
	}, []);

	const getJobs = async () => {
		const res = await axios.get("http://localhost:8000/get-jobs");
		setJobs(res.data.jobs);
	};

	return (
		<div className="bg-slate-black w-full h-screen p-5">
			<div className="w-full flex m-3">
				<img src={Pfp} />
				<div className="flex flex-col ml-3 text-white">
					<p className="text-sm font-normal font-subheadings">Welcome back</p>
					<p className="text-xl font-bold font-body">Raafaye Faheem</p>
				</div>
			</div>
			<div className="flex flex-col mt-10">
				<p className="text-white text-2xl font-body font-bold ml-5">
					Upcoming Jobs
				</p>
				<div className="flex flex-row mt-5 overflow-scroll items-start scrollbar-hide">
					<TwoToneCard
						height="h-[192px]"
						width="w-[224px]"
						time="4pm today"
						title="Wash the Car"
						salaryRange="3k-6k"
						poster="Dino Studio"
					/>
					<TwoToneCard
						height="h-[192px]"
						width="w-[224px]"
						time="4pm today"
						title="Wash the Car"
						salaryRange="3k-6k"
						poster="Dino Studio"
					/>
				</div>
			</div>
			<div className="flex flex-col mt-10">
				<p className="text-white text-2xl font-body font-bold ml-5">
					Browse More
				</p>
				<div className="flex flex-row mt-5 overflow-scroll items-start scrollbar-hide">
					{jobs.map((job) => (
						<RainbowCard
							height="h-[187px]"
							width="w-[285px]"
							title={job.title}
							poster={job.poster}
							location={job.location}
							salaryRange={job.salary}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
