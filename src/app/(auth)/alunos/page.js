"use client";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { database } from "../../services/firebase";

export default function Aluno() {
	const [dados, setDados] = useState([]);
	console.log(dados);
	useEffect(() => {
		const ref = database.ref("aluno");
		ref.on("value", function (snapshot) {
			setDados(snapshot.val());
		});
	}, [database]);

	const x = [
		{
			nome: "Eduardo",
			serie: "5 serie/manhã",
			telefone: "(42)99952-8965",
			nascimento: "14/03/2006",
			icon: "edit",
			icon2: "relatorio",
		},
		{
			nome: "JUJU",
			serie: "5 serie/manhã",
			telefone: "(42)99952-0000",
			nascimento: "14/03/2003",
			icon: "edit",
			icon2: "relatorio",
		},
	];
	return (
		<Fragment>
			<div className="p-[4%] w-screen">
				<div className="">
					<h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">
						Gerenciamento De Alunos
					</h1>
					<span className="text-[#828282] whitespace-nowrap">
						Adicione e edite os alunos da instituição de ensino
					</span>
					<div className="py-[2%]">
						<Link href="/cadastroAluno">
							<button
								type="button"
								className="text-[#251B45] bg-[#0CCA98] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2">
								+ Cadastrar Aluno
							</button>
						</Link>
						<input
							type="text"
							id="instituicao"
							className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mt-[2%]"
							placeholder="Pesquisar aluno..."></input>
					</div>
				</div>
				<div>
					<ul className="">
						<div className=" text-[#FBFAFC] grid grid-cols-6 gap-x-[20%] border rounded-t-lg bg-[#251B45] px-[1%] ">
							<span>Nome</span>
							<span>Série/Turno</span>
							<span>Telefone</span>
							<span>Nascimento</span>
						</div>
						<div></div>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}
