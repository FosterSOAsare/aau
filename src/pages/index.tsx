import programs from "@/data/programs.json";

import Header from "@/components/Header";
import Button from "@/components/Button";
import ProgramCard from "@/components/ProgramCard";

export default function Home() {
	return (
		<>
			<Header />
			<main className={`w-full h-screen`}>
				<section id="hero" className="w-full h-[85vh]">
					<div className="w-full max-w-6xl mx-auto flex items-center justify-center flex-col py-16">
						<div className="border-[2px] px-24 rounded-[20px] py-3">
							<h3 className="text-2xl text-black1 font-mont font-medium">Admission ongoing!</h3>
						</div>

						<h1 className="text-7xl mt-12 mb-4 text-[#0A0029] font-bold">Join a community of learners</h1>

						<p className="w-4/5 text-center text-2xl font-medium text-[#5F5F5F] font-mont">
							AAU is dedicated to providing a collaborative, interactive and convenient environment for our students. Our programs accross all faculties are professionally accredited.
						</p>
						<div className="mt-16 flex items-center justify-center gap-12">
							<Button text="Explore Our Program" sx="!py-5" />
							<Button text="Take a virtual Tour" sx="!py-5 !bg-transparent border-[#3f3f3f] border-[1px] text-sec" />
						</div>
					</div>
				</section>

				<section id="graph" className="w-full h-screen bg-slate-200"></section>

				<section id="programs" className="w-full py-16 h-auto">
					<div className="w-full max-w-6xl mx-auto flex items-center flex-col justify-center">
						<h2 className="text-[161616] text-5xl mb-6 font-bold">Explore Our Diverse Acadmic Programs</h2>
						<p className=" text-2xl font-mont text-center w-4/5">
							At AAU, we take pride in offering compreshensive randge of academic programs that cater for diverse interests and career aspirations.
						</p>
						<div className="w-full mt-24 gap-4 gap-y-8 grid grid-cols-3">
							{programs.map((program: { title: string; desc: string }, index) => (
								<ProgramCard key={index} {...program} />
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
