"use client";

import relatoriosPDF from "@/app/reports/relatorios";
import { db } from "@/services/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import Swal from 'sweetalert2';
function App() {
 const [relatorios, setRelatorios] = useState([]);
 const [titulo, setTitulo] = useState('');
 const [tituloDocumento, setTituloDocumento] = useState('');
 const [topico, setTopico] = useState('');
 const [editingIndex, setEditingIndex] = useState(null);
 const alunosCollectionRef = collection(db, "aluno");
 const [alunos, setAlunos] = useState([]);
 const [selectedAluno, setSelectedAluno] = useState(null);

 function handleSelectAluno(aluno) {
  setSelectedAluno(aluno);
}

 const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const newArray = [...relatorios];
      newArray[editingIndex] = {tituloDocumento, titulo, topico };
      setRelatorios(newArray);
      setEditingIndex(null);
    } else {
      setRelatorios([...relatorios, {tituloDocumento, titulo, topico}]);
    }
    setTitulo('');
    setTopico('');
    setTituloDocumento('');
 };
 const handleEdit = (index) => {
    setTituloDocumento(relatorios[index].tituloDocumento);
    setTitulo(relatorios[index].titulo);
    setTopico(relatorios[index].topico);
    setEditingIndex(index);
 };

 const handleDelete = (index) => {
    const newArray = [...relatorios];
    newArray.splice(index, 1);
    setRelatorios(newArray);
 };

 const saveRelatorios = async (alunos) => {
   try {
      const relatoriosRef = collection(db, `aluno`);
      const subcollectionRef = collection(relatoriosRef, "H6LEWPZ81VsIJwNk0ebW");

      const newDocumentRef = doc(subcollectionRef);
      const relatoriosObject = { relatorios };
      await setDoc(newDocumentRef,relatoriosObject);
      Swal.fire({
        title: "Salvo com sucesso!",
        text: "Relatório foi salvo!",
        icon: "success"
      });
      
   } catch (error) {
      console.error("Erro ao salvar dados: ", error);
      
   }
  };

 console.log(relatorios)

 useEffect(() => {
  const getAlunos = async () => {
  const data = await getDocs(alunosCollectionRef);
  setAlunos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  getAlunos();
}, []);
console.log(selectedAluno)
 return (
  <MagicMotion>
    <div className="pl-[3%] pt-[2%]">
      <div>
        <h1 className="font-extrabold text-[#251B45] text-3xl">Criação de Relatório</h1>
      </div>

      <button
      className="bg-[#0CCA98] text-[#251B45] font-semibold rounded-lg text-1xl px-2  text-center inline-flex items-center mr-2 mb-2 mt-4"
      
    >
      <img className="scale-75" src="quadradino.svg"></img>
      Modelo De Relatorio
    </button>
       <h1 className="font-extrabold text-[#251B45] text-1xl">Novo Tópico</h1>
      <form onSubmit={handleSubmit}>
      <h1 className="font-extrabold text-[#251B45] text-3xl pt-[2%] pb-[1%]">Titulo Do Documento </h1>
        <input
          type="text"
          value={tituloDocumento}
          onChange={(e) => setTituloDocumento(e.target.value)}
          placeholder="Titulo do Documento"
          className="border border-gray-300 rounded-xl bg-gray-50 px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-96 "

        />
      <h1 className="font-extrabold text-[#251B45] text-3xl pt-[2%] pb-[1%]">Titulo do Tópico </h1>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="ex: Título: Primeira avaliação comportamental"
          className="border border-gray-300 rounded-xl bg-gray-50 px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-96 "

        />
        <h1 className="font-extrabold text-[#251B45] text-3xl pt-[2%] pb-[1%]">Descrição/Tópico</h1>
        <textarea
          type="text"
          value={topico}
          onChange={(e) => setTopico(e.target.value)}
          placeholder="Tópico"
          className="border border-gray-300 rounded-xl bg-gray-50 px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block resize "

        />
        <button className="bg-blue-500 text-white font-bold rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-4" type="submit">{editingIndex !== null ? 'Editar' : 'Adicionar'}</button>
      </form>
<div className="pt-[3%]">
      <span className="font-extrabold text-[#251B45] text-3xl "> {relatorios[0] !==  relatorios[1] ? 'Topicos salvos listado:': 'Não há topicos salvos!' }</span>
      </div>
      <div className="grid grid-cols-3 pt-[2%]">
        {relatorios.map((relatorio, index) => (
          <div className="grid grid-cols-3 pt-[2%]" key={index}>
            <h3 className="font-extrabold">{index+1}-{relatorio.titulo}</h3>
            <p> {relatorio.topico}</p>
            <button  className="bg-blue-500 text-white font-bold rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-4" onClick={() => handleEdit(index)}>Editar</button>
            <button className="bg-red-400 text-white font-bold rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-4" onClick={() => handleDelete(index)}>Deletar</button>
          </div>
        ))}
      </div>
      <div>
      <button
      className="bg-[#0CCA98] text-[#251B45] font-semibold rounded-lg text-1xl px-2 py-1 text-center inline-flex items-center mr-2 mb-2 mt-4"
      onClick={saveRelatorios}
    >
      <img className="scale-50" src="diskette 2.svg"></img>
      Salvar Relatorio
    </button>
    
      </div>
      <div>
      <button
      
      className="bg-[#ca0c0c] text-[#251B45] font-semibold rounded-lg text-1xl px-2 py-1 text-center inline-flex items-center mr-2 mb-2 mt-4"
      onClick={(e)=>relatoriosPDF(relatorios)}
    >
     
      Emitir Relatorio
    </button>
    
      </div>
     
    </div>
    <div className="">
    <h1>Alunos cadastrados no sistema!</h1>
    <h2>Selecione o aluno para anexar  ao relatorio!</h2>
    {alunos.map((aluno) => {
			return  <div
      key={aluno.matricula}
      className="bg-white py-[2%]  rounded shadow-md"
      onClick={() => handleSelectAluno(aluno)}
    >
      <h1>Name: {aluno.nome}</h1>
      <h1>Matricula: {aluno.matricula}</h1>
     
    
    </div>
		  })}
      </div>
    </MagicMotion>
 );
 
}

export default App;