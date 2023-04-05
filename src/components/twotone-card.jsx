import React from "react";
import StudioIcon from "../media/studio-icon.png";

export default (props) => {
	return (
		<div
			className={`${props.height ? props.height : "h-[200px]"} ${
				props.width ? props.width : "w-[250px]"
			} bg-black rounded-2xl shadow-lg  mx-2 min-w-[224px]`}
		>
			<div className="flex flex-col bg-white p-4 rounded-t-2xl">
				{props.time && (
					<p className="text-sm font-bold font-body text-sub-gray text-opacity-75">
						{props.time}
					</p>
				)}
				{props.title && (
					<p className="text-2xl font-bold font-body text-black mt-1">
						{props.title}
					</p>
				)}
				{props.salaryRange && (
					<div className="flex text-xs font-subheadings text-sub-gray text-opacity-75 mt-1 bg-gray-200 px-1 py-1.5 rounded-md">
						<p className="px-0.5 text-gray-400 font-thin">Monthly Salary:</p>
						<p className="font-bold text-black">
							${props.salaryRange}
							<span className="font-normal">/month</span>
						</p>
					</div>
				)}
			</div>
			<div className="">
				<div className="flex flex-row items-center mt-5 justify-start">
					<img src={StudioIcon} className="ml-4" />
					<p className="text-md font-semibold font-subheadings text-white ml-2">
						{props.poster}
					</p>
				</div>
			</div>
		</div>
	);
};
