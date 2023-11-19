"use client";

import { db } from "@/services/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";


import { useState } from 'react';
function App() {
 const [relatorios, setRelatorios] = useState([]);
 const [titulo, setTitulo] = useState('');
 const [topico, setTopico] = useState('');
 const [editingIndex, setEditingIndex] = useState(null);

 const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const newArray = [...relatorios];
      newArray[editingIndex] = { titulo, topico };
      setRelatorios(newArray);
      setEditingIndex(null);
    } else {
      setRelatorios([...relatorios, { titulo, topico }]);
    }
    setTitulo('');
    setTopico('');
 };

 const handleEdit = (index) => {
    setTitulo(relatorios[index].titulo);
    setTopico(relatorios[index].topico);
    setEditingIndex(index);
 };

 const handleDelete = (index) => {
    const newArray = [...relatorios];
    newArray.splice(index, 1);
    setRelatorios(newArray);
 };

 const saveRelatorios = async () => {
   try {
      const relatoriosRef = collection(db, "relatorios");
      const newDocumentRef = doc(relatoriosRef);
      const relatoriosObject = { relatorios };
      await setDoc(newDocumentRef, relatoriosObject);
      console.log("Dados salvos com sucesso!");
   } catch (error) {
      console.error("Erro ao salvar dados: ", error);
   }
  };

 console.log(relatorios)
 return (
    <div className="pl-[3%] pt-[2%]">
      <div>
        <h1 className="font-extrabold text-[#251B45] text-3xl">Criação de Relatório</h1>
      </div>

      <button className="bg-[#0CCA98] flex">
        Modelo de Relatório</button>
       <h1 className="font-extrabold text-[#251B45] text-1xl">Novo Tópico</h1>
      <form onSubmit={handleSubmit}>
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
          <div className="bg-white p-2 rounded-lg shadow-lg" key={index}>
            <h3 className="font-extrabold">{index+1}-{relatorio.titulo}</h3>
            <p> {relatorio.topico}</p>
            <button  className="bg-blue-500 text-white font-bold rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-4" onClick={() => handleEdit(index)}>Editar</button>
            <button className="bg-red-400 text-white font-bold rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-4" onClick={() => handleDelete(index)}>Deletar</button>
          </div>
        ))}
      </div>
      <div>
      <button
      className="bg-green-400 text-white font-bold rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2 mt-4"
      onClick={saveRelatorios}
    >
      Salvar Relatorio
    </button>
      </div>
    </div>
 );
}

export default App;