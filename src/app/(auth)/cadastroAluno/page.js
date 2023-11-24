"use client";

import { db } from "@/services/firebaseConfig";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs, updateDoc
} from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import search from '/public/search.svg';
import user from '/public/user.svg';



const Swal = require("sweetalert2");
 export default function CadastroAluno() {
	const [newNome, setNewNome] = useState("");
  	const [newIdade, setNewIdade] = useState();
	const [newTelefone, setNewTelefone] = useState();
	const [newSerie, setNewSerie] = useState();
	const [newTurno, setNewTurno] = useState("");
	const [newMae, setNewMae] = useState("");
	const [newPai, setNewPai] = useState("");
	const [newRepetencias, setNewRepetencias] = useState("");
	const [newDiagnostico, setNewDiagnostico] = useState("");
	const [newProfessorSRM, setNewProfessorSRM] = useState("");
	const [newMatricula, setNewMatricula] = useState();
	const [alunos, setAlunos] = useState([]);
	const [filter, setFilter] = useState('');
	const [editingIndex, setEditingIndex] = useState(null);
  const [editingAluno, setEditingAluno] = useState(null);
	const alunosCollectionRef = collection(db, "aluno");
	
  
	// nascimentoo: newNascimento, phone: newPhone, serie: newSerie, turno: newTurno, mae:newMae, pai:newPai, matricula:newMatricula,
	const createAluno = async (event) => {
		event.preventDefault()
	  await addDoc(alunosCollectionRef, { nome: newNome, idade:newIdade, matricula:newMatricula, telefone: newTelefone, serie: newSerie, turno:newTurno,mae:newMae,pai:newPai,repetencias:newRepetencias,professorSRM:newProfessorSRM,diagnostico:newDiagnostico});
	  Swal.fire({
		title: "Sucesso!!!",
		text: "Aluno Cadastrado",
		icon: "success"
	  });

 
	  setNewNome("")
	  setNewIdade("")
	  setNewTelefone("")
	  setNewSerie("")
	  setNewTurno("")
	  setNewMae("")
	  setNewPai("")
	  setNewMatricula("")
	  setNewProfessorSRM("")
	  setNewRepetencias("")
	  setNewDiagnostico("")
	  setTimeout(function() { location. reload(); }, 2000)
	};
  
	
	useEffect(() => {
        const getAlunos = async () => {
          const data = await getDocs(alunosCollectionRef);
          setAlunos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getAlunos();
      }, []);
    
      const filterAlunos = (alunos, filter) => {
        if (!filter) {
          return alunos;
        }
        return alunos.filter((aluno) =>
          aluno.nome.toLowerCase().includes(filter.toLowerCase())
        );
      };
    
     
  const editAluno = (aluno) => {
    setEditingAluno(aluno);
    // Preencha os campos de edição com os dados do aluno selecionado
    setNewNome(aluno.nome);
    setNewIdade(aluno.idade);
    setNewMatricula(aluno.matricula);
    setNewTelefone(aluno.telefone);
    setNewSerie(aluno.serie);
    setNewTurno(aluno.turno);
    setNewMae(aluno.mae);
    setNewPai(aluno.pai);
    setNewRepetencias(aluno.repetencias);
    setNewProfessorSRM(aluno.professorSRM);
    setNewDiagnostico(aluno.diagnostico);
  };

  const finishEdit = async () => {
    try {
      if (editingAluno) {
        const alunoDocRef = firestoreDoc(db, "aluno", editingAluno.id);

        await updateDoc(alunoDocRef, {
          nome: newNome,
          idade: newIdade,
          matricula: newMatricula,
          telefone: newTelefone,
          serie: newSerie,
          turno: newTurno,
          mae: newMae,
          pai: newPai,
          repetencias: newRepetencias,
          professorSRM: newProfessorSRM,
          diagnostico: newDiagnostico,
          // ... (atualize outros campos conforme necessário)
        });

        Swal.fire({
          title: "Sucesso!!!",
          text: "Aluno Atualizado",
          icon: "success",
        });

        cancelEdit();
        setTimeout(function () {
          location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao atualizar aluno:", error);
    }
  };

  const deleteAluno = async (id) => {
	const alunoDoc = doc(db, "aluno", id);
	await deleteDoc(alunoDoc);
	Swal.fire({
	  icon: "error",
	  title: "Aluno Deletado",
	  text: "Os dados foram deletados com sucesso",
	});
	setTimeout(function() { location. reload(); }, 1000)
  };

  const cancelEdit = () => {
    setEditingAluno(null);
    // Limpe os campos de edição
    setNewNome("");
    setNewIdade("");
    setNewMatricula("");
    setNewTelefone("");
    setNewSerie("");
    setNewTurno("");
    setNewMae("");
    setNewPai("");
    setNewRepetencias("");
    setNewProfessorSRM("");
    setNewDiagnostico("");

	
  };
	return (
	
		
		<div className="pl-[4%] pt-[4%]">
			<div>
			<div className="flex flex-wrap pt-[3%] px-[2%]">
			<img
 						className="bg-[#D9D9D9] rounded-full p-[7%]"
 						src="bonequinho.svg"
				/>
				<div>
				<h1 className="text-[rgb(37,27,69)] font-bold text-3xl ">Jujuba</h1>
					<span className="text-[#828282] whitespace-nowrap text-1xl">
							Visualize e edite as informações sobre o aluno
					</span>
					</div>
					</div>
			</div>
			<div className="">
			<form onSubmit={createAluno}>
				<div className="grid grid-cols-4 gap-2">
	      <span>Nome Completo:</span>
		  <input  className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"  value={newNome}  placeholder="Nome do aluno" onChange={(event) => {setNewNome(event.target.value)}} />
		  <span>Idade:</span>	
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number" value={newIdade}  placeholder="Idade" onChange={(event) => {setNewIdade(event.target.value)}}/>
		  <span>Matricula:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number"  value={newMatricula} placeholder="Matricula" onChange={(event) => {setNewMatricula(event.target.value)}}/>
		  <span>Telefone</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number" value={newTelefone} placeholder="Telefone" onChange={(event) => {setNewTelefone(event.target.value)}}/>
		  <span>Serie:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"   id="input"   value={newSerie} placeholder="Serie" onChange={(event) => {setNewSerie(event.target.value)}}/>
		  <span>TURNO/SRM:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newTurno} placeholder="Turno" onChange={(event) => {setNewTurno(event.target.value)}}/>
		  <span>Pai:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newPai} placeholder="Pai" onChange={(event) => {setNewPai(event.target.value)}}/>
		  <span>Mãe:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newMae} placeholder="Mãe" onChange={(event) => {setNewMae(event.target.value)}}/>
		  <span>Repetências:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newRepetencias} placeholder="Repetências" onChange={(event) => {setNewRepetencias(event.target.value)}}/>
		  <span>Professor da SRM:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newProfessorSRM} placeholder="Professor SRM" onChange={(event) => {setNewProfessorSRM(event.target.value)}}/>

		  <span>Diagnóstico registrado no SERE:</span>

		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text"  value={newDiagnostico}placeholder="Diagnóstico " onChange={(event) => {setNewDiagnostico(event.target.value)}}/>
		  <button className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-7 py-2 text-center inline-flex items-center mr-2 mb-2" type="submit" >Salvar Cadastro</button>
		  </div>
		  </form>
		  <span>Alunos Cadastrados:</span>
		  <div>
		 
		  </div>
		</div>
		<div>
		<div className="relative flex-col">
			<div className="my-[1%]">
        <input type="text" placeholder="Pesquisar aluno..." className=" pl-12 pr-4 py-1 font-bold rounded-lg bg-white focus:outline-none focus:shadow-outline" onChange={(e) => setFilter(e.target.value)}/>
        <Image src={search} alt="search" width={15} height={15} className="absolute top-1/2 left-4 transform -translate-y-1/2" />
      </div>
	  </div>
            <div className="search-container">
			

            </div>
			<table className="table-auto w-full">
			<thead className=" rounded-lg bg-[#251B45]">
                <tr className="">
				<th className=" rounded-tl-lg px-4 py-2 text-[#FBFAFC]"></th>
                    <th className="  px-4 py-2 text-[#FBFAFC]">Nome</th>
                    <th className=" px-4 py-2 text-[#FBFAFC]">Série/turno</th>
                    <th className=" px-4 py-2 text-[#FBFAFC]">Telefone</th>
                    <th className=" px-4 py-2 text-[#FBFAFC]">Matrícula</th>
					<th className=" rounded-tr-lg py-2 text-[#FBFAFC]"></th>
                </tr>
                </thead>
                <tbody>
        {filterAlunos(alunos, filter).map((aluno, index) => {
          return (
            <tr key={aluno.matricula}>
              <Image className="ml-5" src={user} alt="bonequinho" width={15} height={15} />
							<td className="border pl-10 py-2">{aluno.nome}</td>
                            <td className="border pl-10 py-2">{aluno.serie}º/{aluno.turno}</td>
                            <td className="border pl-10 py-2">{aluno.telefone}</td>
                            <td className="border pl-10 py-2">{aluno.matricula}</td>
							<button className="text-white font-bold bg-[#ca0c0c] rounded-lg text-1xl px-[4%] py-1 mt-2 text-center inline-flex items-center   " onClick={() => {deleteAluno(aluno.id)}}>Excluir Aluno </button>
              <button
                className="text-white font-bold bg-[#3B82F6] rounded-lg text-1xl px-[4%] py-1 mt-2 text-center inline-flex items-center"
                onClick={() => editAluno(aluno, index)}
                disabled={editingIndex !== null}
              >
                Editar
              </button>
              {editingIndex === index && (
                <>
                  <button
                    className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-7 py-2 text-center inline-flex items-center mr-2 mb-2"
                    onClick={finishEdit}
                  >
                    Finalizar
                  </button>
                  <button
                    className="text-white font-bold bg-[#F87171] rounded-lg text-1xl px-7 py-2 text-center inline-flex items-center mr-2 mb-2"
                    onClick={cancelEdit}
                  >
                    Cancelar
                  </button>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
            </table>
        </div>
		
		</div>
		
	  );
		

		}