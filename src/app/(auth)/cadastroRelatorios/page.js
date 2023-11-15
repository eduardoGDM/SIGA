"use client";

import { useState, useEffect } from "react";
import { db } from "@/services/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export default function cadastroRelatorio() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersColletctionRef = collection(db, "relatorio");

  const createUser = async () => {
    await addDoc(usersColletctionRef, { titulo: newName, topico: newAge });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { topico: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColletctionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div className="App">
      <input
        placeholder="Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <button onClick={createUser}> Create User </button>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.titulo}</h1>
            <h1>Age: {user.topico}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.topico);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}
//   return (
//     <div className="p-[4%] w-screen">
//       <div className="">
//         <h1 className="text-[#251B45] font-bold text-4xl whitespace-nowrap ">
//           Gerenciamento de Relatórios
//         </h1>
//         <span className="text-[#828282] whitespace-nowrap">
//           Crie, edite e visualize todos os relatórios já iniciados
//         </span>
//         <div className="py-[2%]">
//           <ButtonModal />
//           <Link href="textArea">
//             <button
//               type="button"
//               className="text-[#FBFAFC] bg-[#CA0C0C] rounded-lg text-1xl px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
//             >
//               <img className="w-6 h-6 mr-2" src="bin 2.svg" />
//               Excluir Relatório
//             </button>
//           </Link>

//           <div>
//             <div className="flex">
//               <div>
//                 <img
//                   className="bg-[#D9D9D9]  p-[0.5%] rounded-l-lg"
//                   src="bonequinho.svg"
//                 ></img>
//                 <span className="bg-[#D9D9D9]  p-[1%]">
//                   <span>Aluno:</span>
//                   Eduardo Goncalves
//                 </span>
//                 <span className="bg-[#828282] rounded-r-lg p-[1%]">
//                   Matricula:1234
//                 </span>
//               </div>
//             </div>
//             <div className=" mt-[5%]">
//               <h1>Tópicos Relacionados</h1>
//               {relatorios.map((relatorio) => (
//                 <tr className=" grid grid-cols-6 border-b-2 bg-slate-500">
//                   <a className="">{relatorio.titulo}</a>
//                   <a>{relatorio.topico}</a>
//                   <a>Editar</a>
//                   <a onClick={deletar()}>Excluir</a>
//                 </tr>
//               ))}
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//               + Tópico
//             </button>
//           </div>
//           <div>
//             {/* Topicos começa aqui */}
//             <div>
//               <form onSubmit={writeUserData}>
//                 <div className="grid grid-rows-4">
//                   <input
//                     type="text"
//                     placeholder="Titulo"
//                     value={titulo}
//                     onChange={(event) => setTitulo(event.target.value)}
//                   ></input>
//                   <textarea
//                     placeholder="Tópico"
//                     value={topico}
//                     onChange={(event) => setTopico(event.target.value)}
//                   ></textarea>
//                 </div>
//                 <button
//                   className="text-white font-bo
// 									ld bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
//                   type="submit"
//                 >
//                   <img className="w-6 h-6 mr-2" src="diskette 2.svg" />
//                   Salvar relatório
//                 </button>
//               </form>
//             </div>
//             {/* Topicos termina aqui */}
//             <div className="flex justify-end py-[0%]">
//               <button
//                 className="text-white font-bold bg-[#0CCA98] rounded-lg text-1xl px-5 py-2 text-center inline-flex items-center mr-2 mb-2"
//                 type="submit"
//               >
//                 <img className="w-6 h-6 mr-2" src="pdf-file 6.svg" />
//                 Salvar relatório e emitir PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
