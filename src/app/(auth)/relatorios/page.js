import Link from "next/link";

export default function Relatorios() {
	return (
		<div className="p-[4%] w-screen">
			<div className="">
				<h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">
					Gerenciamento De Relatórios
				</h1>
				<span className="text-[#828282] whitespace-nowrap">
					Crie, edite e visualize todos os relatórios já iniciados
				</span>
				<div className="py-[2%]">
					<Link href="/cadastroRelatorios">
						<button
							type="button"
							className="text-[#251B45] bg-[#0CCA98] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2">
							+ Criar Relatório
						</button>
					</Link>
					<input
						type="text"
						id="instituicao"
						className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mt-[2%]"
						placeholder="Pesquisar aluno..."></input>
				</div>
				<div>
					<ul className="">
						<div className=" text-[#FBFAFC] grid grid-cols-6 gap-x-[20%] border rounded-t-lg bg-[#251B45] px-[1%] ">
							<span>Nome do Aluno</span>
							<span>Data de criação</span>
							<span>Pedagogo Responsável</span>
							<span>Situação</span>
						</div>
						<div></div>
					</ul>
				</div>
			</div>
		</div>
	);
}
