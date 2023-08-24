"use client"
import Link from "next/link";
import { useState } from "react";




export default function Dashboard () {

    const Menu = [
        {title:"Dashboard",src:"quadradino"},
        {title:"Gerenciar Alunos",src:"chapeuzinho"},
        {title:"Gerenciar Relatórios",src:"relatorio-icon"},
        {title:"FAQ",src:"question"},
        {user:"Juliano Lavandoski",src:"bonequinho"}
    ]

    const [open,setOpen] = useState(false);
     
    return (
        <div className={`${open ? "w-72":"w-20" } duration-300 bg-[#251B45] h-screen relative pt-8 p-2` } >
            <img onClick={()=>setOpen(!open)}src="next.svg" className={`absolute cursor-pointer right-3 top-[10%] w-7 ${!open && "rotate-180" }`}/>
            <img className="mx-auto my-auto p-[12%] font-bold" src="logo.svg" alt="image description"/> 
         <div className="flex gap-x-4 items-center"  >
            </div>
            <ul className="pt-6">
                {Menu.map((menu,index)=>(
                    <li key={index} className="text-sm flex items-center gap-x-4 cursor-pointer p-[7%] hover:bg-[#0CCA98] rounded-md">
                        <img src={`/${menu.src}.svg`}/>  
                            <span className={`${!open && 'hidden'}`}>{menu.title}</span>
                            <span className={`${!open && 'hidden'}`}>{menu.user}</span>
                    </li>
                ))}
            </ul>
                </div>
                
        
                    



        
    )
}