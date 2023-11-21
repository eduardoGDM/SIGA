"use client";

import { db } from "@/services/firebaseConfig";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc
} from "firebase/firestore";
import { useEffect, useState } from "react";
const Swal = require("sweetalert2");
 export default function CadastroAluno() {
	const [newNome, setNewNome] = useState("");
  	const [newIdade, setNewIdade] = useState();
	const [newTelefone, setNewTelefone] = useState();
	const [newSerie, setNewSerie] = useState();
	const [newTurno, setNewTurno] = useState("");
	const [newMae, setNewMae] = useState("");
	const [newPai, setNewPai] = useState("");
	const [newMatricula, setNewMatricula] = useState();
	const [alunos, setAlunos] = useState([]);
	const alunosCollectionRef = collection(db, "aluno");
  
	// nascimentoo: newNascimento, phone: newPhone, serie: newSerie, turno: newTurno, mae:newMae, pai:newPai, matricula:newMatricula,
	const createAluno = async (event) => {
		event.preventDefault()
	  await addDoc(alunosCollectionRef, { nome: newNome, idade:newIdade, matricula:newMatricula, telefone: newTelefone, serie: newSerie, turno:newTurno,mae:newMae,pai:newPai});
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
	  setTimeout(function() { location. reload(); }, 2000)
	};
  
	 const updateAluno = async (id,aluno,nome) => {
	   const alunoDoc = doc(db, "aluno", id);
	  
	 await updateDoc(alunoDoc, setNewNome);
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
  
	useEffect(() => {
	  const getAlunos = async () => {
		const data = await getDocs(alunosCollectionRef);
		setAlunos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	  };
	  
	  getAlunos();
	  
	}, []);


	
console.log(alunos)

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
		  <input  className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder="Name" value={newNome} onChange={(event) => {setNewNome(event.target.value)}} />
		  <span>Idade:</span>	
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number" value={newIdade}  placeholder="Idade" onChange={(event) => {setNewIdade(event.target.value)}}/>
		  <span>Matricula:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number"  value={newMatricula} placeholder="Matricula" onChange={(event) => {setNewMatricula(event.target.value)}}/>
		  <span>Telefone</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number" value={newTelefone} placeholder="Telefone" onChange={(event) => {setNewTelefone(event.target.value)}}/>
		  <span>Serie:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="number" value={newSerie} placeholder="Serie" onChange={(event) => {setNewSerie(event.target.value)}}/>
		  <span>Turno:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newTurno} placeholder="Turno" onChange={(event) => {setNewTurno(event.target.value)}}/>
		  <span>Pai:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newPai} placeholder="Pai" onChange={(event) => {setNewPai(event.target.value)}}/>
		  <span>Mãe:</span>
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text"  value={newMae}placeholder="Mae" onChange={(event) => {setNewMae(event.target.value)}}/>
		  <button className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2" type="submit" > SALVAR PARA PDF </button>
		  </div>
		  </form>
		  <span>Alunos Cadastrados:</span>
		  {alunos.map((aluno) => {
			return <div className="grid grid-cols-4 gap-y-4 bg-slate-300 "> 
			  {" "}
			  
			  <h1>Name: {aluno.nome}</h1>
			  <h1>Idade: {aluno.idade}</h1>
			  <h1>Matricula: {aluno.matricula}</h1>
			  <h1>Telefone: {aluno.telefone}</h1>
			  <h1>Serie: {aluno.serie}ª</h1>
			  <h1>Mae: {aluno.mae}</h1>
			  <h1>Pai: {aluno.pai}</h1>
			 

			  <button className="text-white font-bold bg-[#ca0c0c] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-[6%] " onClick={(e)=>relatoriosPDF(alunos)}>Criar Relatorio </button>
			  <button className="text-white font-bold bg-[#ca0c0c] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-[6%] " onClick={() => {deleteAluno(aluno.id)}}>Excluir Aluno </button>
			  

			   <button onClick={() => {
				updateAluno(aluno.id, aluno.nome);
			  }}>Oi </button>
			</div>
		  })}
		</div>
		</div>
		
	  );
		

		}