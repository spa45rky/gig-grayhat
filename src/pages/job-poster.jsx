import React from "react";
import Pfp from "../media/pfp.png";
import TwoToneCard from "../components/twotone-card";

export default () => {
	return (
		<div className="bg-slate-black w-full h-screen p-5">
			<div className="w-full flex m-3">
				<img src={Pfp} />
				<div className="flex flex-col ml-3 text-white">
					<p className="text-sm font-normal font-subheadings">Welcome back</p>
					<p className="text-xl font-bold font-body">Raafaye Faheem</p>
				</div>
			</div>
			<div className="flex flex-col mt-10 justify-start items-center">
				<TwoToneCard
					title="Post a new Job"
					height="h-[122px]"
					width="w-[354px]"
					poster="Dino Studio"
				/>
			</div>
		</div>
	);
};
