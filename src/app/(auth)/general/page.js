export default function General() {
    return(
        
        <div className="bg-[#ffff] h-screen ">
            <div className="flex">
            <img className="p-[6%] scale-25" src="interview.svg"/>
            <div className="flex flex-col py-[10%] font-bold">
                  <h1 className="text-[#251B45] text-3xl ">Olá,Juliano Lavandoski</h1>
                    <span className="text-[#828282] py-[2%]">Resumo Geral do seu gerenciamento na instituição</span>
                        <button type="button" disabled className="text-[#828282] font-bold bg-[#D9D9D9] rounded-lg px-[10%]text-center inline-flex items-center mr-10 mb-2">
                            <img className="w-6 h-6 mr-2 whitespace-nowrap" src="school 2.svg" />Colégio Estadual Cívico-Militar General Antônio Sampaio</button>
            </div>
            </div>
                        <div className="flex">
                     <button type="button" disabled className="text-[#0CCA98] font-bold bg-[#251B45] rounded-lg  text-center inline-flex items-center ml-[7%]">
                            <img className="scale-50 " src="homezinho.svg" />
                            <span className="text-5xl">22</span>
                            <span className="text-white flex p-[1%] font-bold text-2xl ">Alunos Cadastrados</span></button>

                      <button type="button" disabled className="text-[#0CCA98] font-bold bg-[#251B45] rounded-lg text-center inline-flex items-center ml-[3%]">
                            <img className="scale-50 " src="report 2.svg" />
                            <span className="text-5xl">22</span>
                            <span className="text-white flex p-[1%] font-bold text-2xl  ">Relatórios Emitidos</span></button>
            </div>
            <div>
                      <button type="button" disabled className="text-[#FBFAFC] bg-[#251B45] px-[20%] rounded-lg  inline-flex items-center mt-[2%] ml-[7%] ">
                            <img className="scale-50" src="status 4.svg"/>
                            <span className="text-white flex font-bold">12 relatórios ainda não foram finalizados. Ver mais</span></button>
            </div>
        </div>
    )
}