
export default function CadastroAluno() {

    return(
         <div className="">
            <div className="pl-[14%] pt-[10%] ">
            <div className="">
            <img className="bg-[#D9D9D9] rounded-full p-[7%]" src="bonequinho.svg"/>
            <div className="flex flex-wrap pt-[3%] px-[2%]">
            <h1 className="text-[rgb(37,27,69)] font-bold text-3xl ">Jujuba</h1>
            <span className="text-[#828282] whitespace-nowrap text-1xl">Visualize e edite as informações sobre o aluno</span>
     </div>
 </div>
</div>
            <div className="pl-[14%] pt-[5%] font-bold text-[rgb(37,27,69)] grid grid-cols-2 gap-x-3">
                <span className="py-[2%]">Nome Completo</span>
                <input type="text" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[%]">Data de Nascimento</span>
                <input type="date" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Telefone</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Série</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Turno</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Filiação: Mãe</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Filiação: Pai</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Matrícula</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                <span className="py-[2%]">Repetência</span>
                <input type="number" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder=""></input>
                
          </div>
        </div>
    )
}