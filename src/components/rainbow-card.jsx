import React from "react";

export default (props) => {
	return (
		<div
			className={`${props.height ? props.height : "h-[200px]"} ${
				props.width ? props.width : "w-[250px]"
			} rainbow-bg
             rounded-lg shadow-lg  mx-2 min-w-[224px]`}
		>
			<div className="flex flex-col bg-white px-7 py-2 rounded-t-lg h-[77%]">
				{props.title && (
					<p className="text-xl font-bold font-body text-black mt-1">
						{props.title}
					</p>
				)}
				{props.poster && (
					<p className="text-sm font-normal font-subheadings text-black mt-1">
						{props.poster}
					</p>
				)}
				{props.applicants &&
					props.applicants.map((applicant) => <img src={applicant} />)}
			</div>
			<div className="flex justify-between px-3">
				{props.location && (
					<p className="text-xs font-bold font-subheadings text-black mt-3 mx-4">
						{props.location}
					</p>
				)}
				{props.salaryRange && (
					<p className="text-sm font-normal font-subheadings text-black mt-1">
						{props.salaryRange}
					</p>
				)}
			</div>
		</div>
	);
};
