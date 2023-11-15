"use client";

import { db } from "@/services/firebaseConfig";
import { onValue, ref } from "firebase/database";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Relatorios() {
  const [relatorio, setRelatorio] = useState([]);

  useEffect(() => {
    const dbRef = ref(db, "relatorio");

    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dadosArray = Object.values(data);
        setRelatorio(dadosArray);
      } else {
        // Handle the case when there's no data
        setRelatorio([]);
      }
    });
  }, []); // O segundo argumento vazio [] indica que este efeito deve ser executado apenas uma vez, quando o componente é montado

  console.log("Estado de relatorio", relatorio);
  return (
    <div className="p-[4%] w-screen">
      <div className="">
        <h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">
          Gerenciamento De Relatórios
        </h1>
        <span className="text-[#828282] whitespace-nowrap">
          Adicione e edite os relatórios
        </span>
        <div className="py-[2%]">
          <Link href="/cadastroRelatorios">
            <button
              type="button"
              className="text-[#251B45] bg-[#0CCA98] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
            >
              + Criar Relatório
            </button>
          </Link>
          <input
            type="text"
            id="instituicao"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mt-[2%]"
            placeholder="Pesquisar aluno..."
          ></input>
        </div>
      </div>

      <div>
        <table className="table-auto w-full">
          <thead>
            <tr className=" grid grid-cols-4  gap-x-[10%] bg-[#251B45] text-[#FBFAFC]  ">
              <th className="">Nome do Aluno</th>
              <th>Data de criação</th>
              <th>Título</th>
              <th className="">Situação</th>
            </tr>
          </thead>
          <tbody className="bg-[#0CCA98] ">
            {relatorio.map((relatorios) => (
              <tr className=" grid grid-cols-6 border-b-2" key={relatorios.id}>
                <td className="">{relatorios.titulo}</td>
                <td>{relatorios.topico}</td>

                {/* <img className="bg-blue cursor-pointer" src="edit.svg"></img>
								<Link href="/cadastroRelatorios">
									<img className="cursor-pointer " src="docs.svg"></img>
								</Link> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
