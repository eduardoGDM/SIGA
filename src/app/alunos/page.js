export default function Aluno(){

    const Dados = [
        {nome:"Eduardo",serie:"5 serie/manhã",telefone:"(42)99952-8965",nascimento:"14/03/2006"},
        {nome:"JUJU",serie:"5 serie/manhã",telefone:"(42)99952-0000",nascimento:"14/03/2003"},
    ]
    return(
        
        <div className="pl-[14%] pt-[10%] ">
            <div className="">
            <h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">Gerenciamento De Alunos</h1>
             <span className="text-[#828282] whitespace-nowrap">Adicione e edite os alunos da instituição de ensino</span>
                <button type="button" className="text-[#251B45] font-medium bg-[#0CCA98]  rounded-lg text-1xl px-[3%] py-[1%] mt-[2%] text-center inline-flex items-center mr-2 mb-2 ">+ Cadastrar Aluno</button>
                <div>
                <input type="text" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mt-[2%]" placeholder="Pesquisar aluno...">
                </input>
                </div>  
                <div>
                <ul className="pt-6">
                <div className="bg-[#251B45] text-[#FBFAFC] grid grid-cols-4 gap-x-[6%] border rounded-t-lg">
                    <span>Nome</span> 
                    <span>Série/Turno</span>
                    <span>Telefone</span>
                    <span>Nascimento</span>
                </div>
                {Dados.map((dados,index)=>(
                    <li key={index} className="text-sm grid grid-cols-4 gap-x-[6%] py-[1%] whitespace-nowrap ">
                            <span className="">{dados.nome}</span>
                            <span className="">{dados.serie}</span>
                            <span className="">{dados.telefone}</span>
                            <span className="">{dados.nascimento}</span>
                    </li>

                ))}
            </ul>
                </div>
        </div>
    </div>

    )
}