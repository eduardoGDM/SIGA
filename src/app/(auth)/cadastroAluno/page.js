"use client";

import { db } from "@/services/firebaseConfig";
import { push, ref, set } from "firebase/database";
import { useState } from "react";

const Swal = require("sweetalert2");

export default function CadastroAluno() {
  function gravar(event) {
    event.preventDefault();
    const dados = {
      nome,
      telefone,
      serie,
      nascimento,
      turno,
      filiacaoM,
      filiacaoP,
      matricula,
      repetencia,
    };

    Swal.fire({
      title: "Deseja Salvar?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Não Salvar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const dbRef = ref(db, "aluno");
        const novoRegistroRef = push(dbRef); // Crie uma nova referência com um ID único gerado pelo Firebase
        set(novoRegistroRef, dados) // Use set na nova referência para definir os dados
          .then(() => {
            Swal.fire("Salvo!", "", "success");
            setNome("");
            setTelefone("");
            setSerie("");
            setNascimento("");
            setTurno("");
            setFiliacaoM("");
            setFiliacaoP("");
            setMatricula("");
            setRepetencia("");
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
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [serie, setSerie] = useState("");
  const [turno, setTurno] = useState("");
  const [filiacaoM, setFiliacaoM] = useState("");
  const [filiacaoP, setFiliacaoP] = useState("");
  const [matricula, setMatricula] = useState("");
  const [repetencia, setRepetencia] = useState("");

  // useEffect(() => {
  // 	const RefAlunos = database.ref("aluno");
  // 	RefAlunos.on("value", (result) => {
  // 		const resultAlunos = Object.entries(result.val() ?? {}).map(
  // 			([key, value]) => {
  // 				return {
  // 					key: key,
  // 					nome: value.nome,
  // 					email: value.email,
  // 					telefone: value.telefone,
  // 				};
  // 			}
  // 		);
  // 		//console.log(result.val()); //show only objects value
  // 	});
  // }, []);

  function completeAlert() {}
  return (
    <div className="">
      <div className="pl-[14%] pt-[10%] ">
        <div className="">
          <img
            className="bg-[#D9D9D9] rounded-full p-[7%]"
            src="bonequinho.svg"
          />
          <div className="flex flex-wrap pt-[3%] px-[2%]">
            <h1 className="text-[rgb(37,27,69)] font-bold text-3xl ">Aluno</h1>
            <span className="text-[#828282] whitespace-nowrap text-1xl">
              Visualize e edite as informações sobre o aluno
            </span>
          </div>
        </div>
      </div>

      <div className="pl-[14%] pt-[5%] font-bold text-[rgb(37,27,69)] grid grid-cols-2 gap-x-3">
        <form onSubmit={gravar}>
          <span className="py-[2%]">Nome Completo</span>
          <input
            type="text"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setNome(event.target.value)}
            value={nome}
          ></input>
          <span className="py-[%]">Data de Nascimento</span>
          <input
            type="date"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setNascimento(event.target.value)}
            value={nascimento}
          ></input>
          <span className="py-[2%]">Telefone</span>
          <input
            type="number"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setTelefone(event.target.value)}
            value={telefone}
          ></input>
          <span className="py-[2%]">Série</span>
          <input
            type="number"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setSerie(event.target.value)}
            value={serie}
          ></input>
          <span className="py-[2%]">Turno</span>
          <input
            type="text"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setTurno(event.target.value)}
            value={turno}
          ></input>
          <span className="py-[2%]">Filiação: Mãe</span>
          <input
            type="text"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setFiliacaoM(event.target.value)}
            value={filiacaoM}
          ></input>
          <span className="py-[2%]">Filiação: Pai</span>
          <input
            type="text"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setFiliacaoP(event.target.value)}
            value={filiacaoP}
          ></input>
          <span className="py-[2%]">Matrícula</span>
          <input
            type="number"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setMatricula(event.target.value)}
            value={matricula}
          ></input>
          <span className="py-[2%]">Repetência</span>
          <input
            type="number"
            className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
            placeholder=""
            onChange={(event) => setRepetencia(event.target.value)}
            value={repetencia}
          ></input>
          <button
            className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
