"use client";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { database } from "../../services/firebase";

export default function Aluno() {
	useEffect(() => {
		const ref = database.ref("aluno");
		ref.on("value", function (snapshot) {
			snapshot.forEach(function (element) {
				const { nome } = element.val();
				const { serie } = element.val();
				const { telefone } = element.val();
				const { nascimento } = element.val();
				console.log(nome, serie, telefone, nascimento);
			});
		});
	}, [database]);

	// 	// Atualize o estado com os dados
	// 	query.onData((snapshot) => {
	// 		setDados(snapshot.val());
	// 	});
	// }, []);

	const Dados = [
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
						{Dados.map((dados, index) => (
							<div className="">
								<li
									key={index}
									className="bg-slate-400 text-sm grid grid-cols-5 gap-x-[0%] py-[1%] px-[1%] whitespace-nowrap">
									<span className="">{dados.nome}</span>
									<span className="">{dados.serie}</span>
									<span className="">{dados.telefone}</span>
									<span className="">{dados.nascimento}</span>
									<div className="flex px-[40%]">
										<img
											className="mr-2 cursor-pointer"
											src={`/${dados.icon}.svg`}
										/>
										<img
											className="cursor-pointer"
											src={`/${dados.icon2}.svg`}
										/>
									</div>
								</li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</Fragment>
	);
}
