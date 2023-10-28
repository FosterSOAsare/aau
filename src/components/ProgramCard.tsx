import React from "react";
import Button from "./Button";

const ProgramCard = ({ title, desc }: { title: string; desc: string }) => {
	return (
		<div className="w-full h-[320px] rounded-[12px] border-[1px] px-7 py-10 border-[#6C45E1] hover:cursor-pointer hover:border-[2px]">
			<h3 className="text-[22px] font-bold mb-4">{title}</h3>
			<p className="text-2xl text-[#686868]"> {desc}</p>

			<Button text="Explore Program" sx="mt-8 !rounded-[5px] !py-4 hover:opacity-80" />
		</div>
	);
};

export default ProgramCard;
