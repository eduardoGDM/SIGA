"use client";
import { db } from "@/services/firebaseConfig";
import { onValue, ref } from "firebase/database";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
export default function Aluno() {
	const [dados, setDados] = useState([]);

	console.log("useState objeto", dados);

	useEffect(() => {
		const dbRef = ref(db, "aluno");

		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				const dadosArray = Object.values(data);
				setDados(dadosArray);
			} else {
				// Handle the case when there's no data
				setDados([]);
			}
		});
	}, []); // O segundo argumento vazio [] indica que este efeito deve ser executado apenas uma vez, quando o componente é montado

	console.log("Estado de dados", dados);

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
					<table className="table-auto w-full">
						<thead>
							<a className=" grid grid-cols-8  gap-x-[17%] bg-[#251B45] text-[#FBFAFC]  rounded-t-lg  ">
								<th className="">Nome</th>
								<th>Série/Turno</th>
								<th>Telefone</th>
								<th className="">Nascimento</th>
							</a>
						</thead>
						<tbody className="bg-[#0CCA98] ">
							{dados.map((aluno) => (
								<td className=" grid grid-cols-6 border-b-2" key={aluno.id}>
									<td className="">{aluno.nome}</td>
									<td>{aluno.turno}</td>
									<td>{aluno.telefone}</td>
									<td>{aluno.nascimento}</td>

									<img className="bg-blue cursor-pointer" src="edit.svg"></img>
									<Link href="/cadasaoRelatorios">
										<img className="cursor-pointer " src="docs.svg"></img>
									</Link>
								</td>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	);
}
