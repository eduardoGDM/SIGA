"use client";

import { db } from "@/services/firebaseConfig";
import 'firebase/auth';
import 'firebase/database';
import { onValue, push, ref, set } from "firebase/database";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonModal from "../../buttonModal";
const Swal = require("sweetalert2");



export default function cadastroRelatorios() {
	const [relatorios, setRelatorios] = useState([]);
	const [topico, setTopico] = useState("");
	const [titulo, setTitulo] = useState("");
	

	useEffect(() => {
		const dbRef = ref(db, "relatorio");

		onValue(dbRef, (snapshot) => {
			const data = snapshot.val();
			if(data) {
			const listsRelatorios = Object.keys(data).map((key) => ({
				id: key,
				...data[key],
			}));
			setRelatorios(listsRelatorios);
		  } else {
			setRelatorios([]);
		  }
	});
	 

	function gravar(event) {
		event.preventDefault();
		const dados = {
			titulo,
			topico,
		};

		Swal.fire({
			title: "Deseja Salvar?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: "Salvar",
			denyButtonText: `Não Salvar`,
		}).then((result) => {
			if (result.isConfirmed) {
				const dbRef = ref(db, "relatorio");
				const novoRegistroRef = push(dbRef); // Crie uma nova referência com um ID único gerado pelo Firebase
				set(novoRegistroRef, dados) // Use set na nova referência para definir os dados
					.then(() => {
						Swal.fire("Salvo!", "", "success");
						setTitulo("");
						setTopico("");
					})
					.catch((error) => {
						console.error("Erro ao salvar dados:", error);
						// Lide com o erro aqui
					});
			} else if (result.isDenied) {
				Swal.fire("Alterações descartadas", "", "");
			}
		});
	}

	
	const excluirRelatorio = (id) => {
		const relatoriosRef = ref(`relatorios/${id}`);
		
		relatoriosRef.remove()
		  .then(() => {
			console.log('okkk')
		  })
		  .catch((error) => {
			console.error('erro bucetaaaaaaa', error)
	      });
	  };
	return (
		<div className="p-[4%] w-screen">
			<div className="">
				<h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">
					Gerenciamento de Relatórios
				</h1>
				<span className="text-[#828282] whitespace-nowrap">
					Crie, edite e visualize todos os relatórios já iniciados
				</span>
				<div className="py-[2%]">
					<ButtonModal />
					<Link href="textArea">
						<button
							type="button"
							className="text-[#FBFAFC] bg-[#CA0C0C] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2">
							<img className="w-6 h-6 mr-2" src="bin 2.svg" />
							Excluir Relatório
						</button>
					</Link>

					<div>
						<div className="flex">
							<div>
							<img
								className="bg-[#D9D9D9]  p-[0.5%] rounded-l-lg"
								src="bonequinho.svg"></img>
							<span className="bg-[#D9D9D9]  p-[1%]">
								<span>Aluno:</span>
								Eduardo Goncalves
							</span>
							<span className="bg-[#828282] rounded-r-lg p-[1%]">
								Matricula:1234
							</span>
							</div>
							
						</div>
						<div className=" mt-[5%]">
							<h1>Tópicos Relacionados</h1>
							{relatorios.map((relatorio) => (
							<tr className=" grid grid-cols-6 border-b-2 bg-slate-500">
								<tr key={relatorio.id} className="">{relatorio.titulo}</tr>
								<tr key={relatorio}>{relatorio.topico}</tr>
								<a>Editar</a>
								<a onClick={()=>{excluirRelatorio(relatorio.id)}}>Excluir</a>
								
							</tr>
						))}
						</div>
						<button
							className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
							+ Tópico
						</button>
					</div>
					<div>
					
						
							{/* Topicos começa aqui */}
							<div>
								<form onSubmit={gravar}>
									<div className="grid grid-rows-4">
									<input type="text" placeholder="Titulo" value={titulo} onChange={event=> setTitulo(event.target.value)}></input>
									<textarea placeholder="Tópico" value ={topico} onChange={event=> setTopico(event.target.value)}></textarea>
									
									</div>
									<button
									className="text-white font-bo
									ld bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
									type="submit">
									<img className="w-6 h-6 mr-2" src="diskette 2.svg" />
									Salvar relatório
								</button>
										
								</form>
								
							</div>
							{/* Topicos termina aqui */}
							<div className="flex justify-end py-[0%]">
								<button
									className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
									type="submit">
									<img className="w-6 h-6 mr-2" src="pdf-file 6.svg" />
									Salvar relatório e emitir PDF
								</button>
							
							</div>
					</div>
				</div>
			</div>
			
			

		</div>
	)
	})
}