"use client";

import { db } from "@/services/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs
} from "firebase/firestore";
import { useEffect, useState } from "react";

  
const initialFormData = { title: '', topic: '' };
export default function cadastroRelatorio() {
  const [newTituloGeral, setNewTituloGeral] = useState("");
  const [newTitulo, setNewTitulo] = useState("");
  const [newTopico,setNewTopico] = useState("")
  const [relatorios, setRelatorio] = useState([]);
  const relatorioCollectionRef = collection(db, "relatorio")


  const [formData, setFormData] = useState(initialFormData);
  const [topics, setTopics] = useState([]);

  const Swal = require("sweetalert2");

  const [inputs, setInputs] = useState([{ id: 0, text: '' }]);







  
  const createRelatorio = async (event) => {
		event.preventDefault()
	  await addDoc(relatorioCollectionRef, { tituloGeral: newTituloGeral, titulo:newTitulo, topico:newTopico});
	  Swal.fire({
		title: "Sucesso!!!",
		text: "Relatório Cadastrado",
		icon: "success"
	  });
	
	  setTimeout(function() { location. reload(); }, 2000)
	};
	//  const updateRelatorio = async (id,aluno,nome) => {
	//    const relatorioDoc = doc(db, "relatorio", id);
	  
	//  await updateDoc(realtorioDoc, setNewNome);
	//  };
	const deleteRelatorio = async (id) => {
	  const relatorioDoc = doc(db, "relatorio", id);
	  await deleteDoc(relatorioDoc);
	  Swal.fire({
		icon: "error",
		title: "Relatório Deletado",
		text: "Os dados foram deletados com sucesso",
	  });
	  setTimeout(function() { location. reload(); }, 1000)
	};
	useEffect(() => {
	  const getRelatorio = async () => {
		const data = await getDocs(relatorioCollectionRef);
		setRelatorio(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	  };
	  
	  getRelatorio();
	  
	}, []);


///text area





 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 const handleAddTopic = () => {
    if (formData.title.trim() === '' || formData.topic.trim() === '') return;
    setTopics([...topics, formData]);
    setFormData(initialFormData);
 };

 const handleRemoveTopic = (index) => {
    const newTopics = [...topics];
    newTopics.splice(index, 1);
    setTopics(newTopics);
 };

 const handleSave = () => {
    const topicsArray = topics.map((topic, index) => ({
      [`${index}`]: { title: topic.title, topic: topic.topic },
      
    }));
    Swal.fire({
      title: "Sucesso!!!",
      text: "Topico salvo Cadastrado",
      icon: "success"
      });
    console.log(topicsArray);
 };

    




  
  
  return (
    <div className="pl-[4%] pt-[4%]">
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
          <div>
          <button className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2" onClick={handleAddTopic}> Adicionar Topico </button>
          <button className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2" onClick={handleSave}> Salvar Topico </button>
          </div>
       {/* <span>Título do Relatório:</span>
		  <input  className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" placeholder="Titulo do Documento" value={newTituloGeral} onChange={(event) => {setNewTituloGeral(event.target.value)}} />
		  <span>Título do Tópico:</span>	
		  <input className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newTitulo}  placeholder="Titulo do Tópico" onChange={(event) => {setNewTitulo(event.target.value)}}/>
		  <span>Tópico:</span>
      <textarea className=" text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]" type="text" value={newTopico}  placeholder="Tópico" onChange={(event) => {setNewTopico(event.target.value)}}></textarea>
     <div className="">
      <button  className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2" onClick={createRelatorio}> Salvar Relatorio </button>
      <div> 
        */}

     
    
     
      {relatorios.map((relatorio) => {
        return <div> 
          {" "}
          <h1>Titulo Geral: {relatorio.tituloGeral}</h1>
          <h1>Titulo: {relatorio.titulo}</h1>
          <h1>topico: {relatorio.topico}</h1> 
          {/* <button onClick={() => {
            updateUser(relatorio.id, relatorio.age);
          }}>Increase </button> */}
          <button className="pl-2" onClick={() => {deleteRelatorio(relatorio.id)}}>Delete </button>
        </div>
      })}
      <div>
      <div>
      <span>Titulos:</span>
        
      <div className="flex ">
      <input
      className="  w-[600px] text-center rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      </div>
      <span>Topicos:</span>
      <div className="">
       
        <textarea
        className=" h-[200px] w-[600px] rounded-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block px-[5%] py-[1%] mb-[2%]"
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        placeholder="Topic"></textarea>
      </div>
      
      </div>
     
    
      {topics.map((topic, index,title) => (
        <div key={index}>
          
          <button className="text-white font-bold bg-[#ca0c0c] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2" onClick={() => handleRemoveTopic(index)}>Remover topico:  [ {index+1} ] titulo: [ {topic.title} ] e topico: [ {topic.topic} ] </button>
        </div>
      ))}
       
      
    </div>
 

      </div>
  
  
  );
}

