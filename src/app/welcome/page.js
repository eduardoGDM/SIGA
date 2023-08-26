import Link from 'next/link';

export default function Welcome() {
    return(
        <div className="h-screen justify-center items-center bg-[#251B45]">
             <img className="mx-auto my-auto p-[2%] " src="logo.svg" alt="image description"/>   
                <div className="flex justify-items-center items-center flex-col ">
                <h1 className=" text-[#FFFF] text-3xl">Bem-Vindo ao SIGA software</h1>
                <h2 className=" text-[#FFFF] text-sm">Essa é a tela de configuração inicial do sistema.</h2>
        </div>
            <div className="flex justify-items-center items-center flex-col py-[3%] ">
                    <h1 className="text-2xl font-bold text-[#0CCA98] py-4">Qual o nome da Instituição de Ensino?</h1>
                    <input type="text" id="instituicao" className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[50%] py-3 "/>
                    <h2 className="text-1xl py-[2%] text-[#FFFF] ">Faça o upload da logo/brasão da Instituição</h2>
                        <button type="button" className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2">
                            <img className="w-6 h-6 mr-2" src="update-icon.svg" />Fazer Upload</button>
            <div className="flex">
                    <h1 className="text-[#0CCA98] bold whitespace-nowrap content-center py-[12%] ">Avançar e acessar sistema</h1>
                    <Link href="/dashboard"><img className="p-[%]" src="next.svg" alt="image description"/>  
                    </Link>
                    
            </div>
        </div>
    </div>
    )
}
