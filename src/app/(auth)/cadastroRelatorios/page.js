"use client";
import Link from "next/link";

// const [topico, setTopico] = useState("");
// const [titulo, setTitulo] = useState("");

// function gravar(event) {
// 	const ref = database.ref("topico");

// 	event.preventDefault();
// 	const dados = {
// 		titulo,
// 		topico

// 	}
// 	};

export default function cadastroRelatorios() {
	return (
		<div className="p-[4%] w-screen">
			<div className="">
				<h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">
					Criar Relatorios
				</h1>
				<span className="text-[#828282] whitespace-nowrap">
					Crie, edite e visualize todos os relatórios já iniciados
				</span>
				<div className="py-[2%]">
					<Link href="/cadastroRelatorios">
						<button
							type="button"
							className="text-[#251B45] bg-[#0CCA98] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2">
							+ Modelos Prontos
						</button>
					</Link>
					<Link href="/cadastroRelatorios">
						<button
							type="button"
							className="text-[#FBFAFC] bg-[#CA0C0C] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2">
							+ Modelos Prontos
						</button>
					</Link>
					<div>
						<img
							className="bg-[#D9D9D9] rounded-full p-[1%]"
							src="bonequinho.svg"></img>

						<span>Aluno:</span>
						<div className="flex">
							<span className="bg-[#D9D9D9] rounded-full p-[3px]">
								Eduardo Goncalves
							</span>
							<span className="bg-[#828282] rounded-r-full p-[3px]">
								Matricula:1234
							</span>
						</div>
						<button
							type="button"
							className="text-[#251B45] font-bold  rounded-lg text-1xl  py-2 text-center inline-flex items-center  mb-2">
							<img className="w-6 h-6 mr-2" src="update-icon.svg" />+ Adicionar
							Tópico
						</button>

						{/* Topicos começa aqui */}
						<div>
							<input
								className=" placeholder:italic placeholder:text-slate-400 block bg-[#D9D9D9] w-full border border-slate-300 border-b-1 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
								placeholder="Título: Primeira avaliação comportamental..."
								type="text"
								name="search"></input>

							<label
								for="message"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Your message
							</label>
							<textarea
								id="message"
								rows="4"
								className="block p-[1%] w-full text-sm text-[#828282] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[#D9D9D9] dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
