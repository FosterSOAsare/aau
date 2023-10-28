import Link from "next/link";
import React from "react";

const Button = ({ text, href, sx = "" }: { text: string; href?: string; sx?: string }) => {
	let styles = `${sx} px-5 p-2 bg-sec text-white font-medium rounded-[12px] font-inter`;
	return (
		<>
			{!href && <button className={styles}>{text}</button>}
			{href && (
				<Link className={styles} href={href}>
					{text}
				</Link>
			)}
		</>
	);
};

export default Button;
