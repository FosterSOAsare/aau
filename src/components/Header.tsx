import React from "react";

import Button from "./Button";

const Header = () => {
	return (
		<header className="w-full sticky top-0 left-0 bg-white shadow-md z-[10] h-auto">
			<div className="flex items-center justify-between py-6 max-w-6xl mx-auto">
				<div className="w-[80px] bg-slate-200 h-10"></div>
				<nav className="w-auto  h-auto">
					<ol className="flex items-center justify-between gap-10">
						<li className="text-[18px]  font-inter">Home</li>
						<li className="text-[18px]  font-inter">Academics </li>
						<li className="text-[18px]  font-inter">Student</li>
						<li className="text-[18px]  font-inter">Admission</li>
						<li className="text-[18px]  font-inter">Staff</li>
						<li className="text-[18px]  font-inter">About Us</li>
					</ol>
				</nav>
				<Button text="Login" sx="!py-3" />
			</div>
		</header>
	);
};

export default Header;
