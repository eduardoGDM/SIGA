"use client";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function sideBar() {
	const Menu = [
		{ title: "Dashboard", src: "quadradino", link: "/general" },
		{ title: "Gerenciar Alunos", src: "chapeuzinho", link: "/alunos" },
		{ title: "Gerenciar Relatórios", src: "docs", link: "/relatorios" },
		{ title: "FAQ", src: "question", link: "faq" },
		{ user: "Juliano Lavandoski", src: "bonequinho" },
	];

	const [page, setPage] = useState("general");

	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<div className="flex ">
				<div
					className={`${
						open ? "w-72" : "w-20"
					} duration-300 bg-[#251B45] h-screen relative pt-10 p-2`}>
					<img
						onClick={() => setOpen(!open)}
						src="next.svg"
						className={`absolute cursor-pointer right-0 top-[18%] w-7 ${
							!open && "rotate-180"
						}`}
					/>
					<Link href="/">
						<img
							className="mx-auto my-auto p-[8%] font-bold"
							src="logo.svg"
							alt="image description"
						/>
					</Link>
					<div className="flex gap-x-4 items-center"></div>
					<ul className="pt-6">
						{Menu.map((menu, index) => (
							<a
								href={menu.link}
								key={index}
								className="text-sm flex items-center gap-x-2 cursor-pointer py-[6%] px-[10%] rounded-xl hover:bg-[#0CCA98] ">
								<img className="px-2" src={`/${menu.src}.svg`} />
								<span className={`${!open && "hidden"} text-white`}>
									{menu.user}
								</span>
								<span className={`${!open && "hidden"} text-white`}>
									{menu.title}
								</span>
							</a>
						))}
					</ul>
					<img
						className={`${!open && "hidden"} ml-[12%] mt-[10%]`}
						src="logout 1.svg"
					/>
				</div>
				<div></div>
			</div>
		</Fragment>
	);
}
