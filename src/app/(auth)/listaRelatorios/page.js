"use client"
import { db } from '@/services/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import EdicaoRelatorio from '../components/EdicaoRelatorio ';
import search from '/public/search.svg';
import user from '/public/user.svg';
const TabelaRelatorios = () => {
  const router = useRouter();

  const [relatorios, setRelatorios] = useState([]);
  const [tituloDocumento, setTituloDocumento] = useState([]);
  const [filter, setFilter] = useState('');
  const [relatorioEditando, setRelatorioEditando] = useState(null);
  useEffect(() => {
    const relatoriosCollectionRef = collection(db, 'relatorios');

    const unsubscribe = onSnapshot(relatoriosCollectionRef, (querySnapshot) => {
      const relatoriosArray = [];
      querySnapshot.forEach((doc) => {
        const { id, relatorios, tituloDocumento } = doc.data();

        // Aqui, 'relatorios' é um array de objetos
        relatoriosArray.push({
          id,
          tituloDocumento: relatorios[0]?.tituloDocumento || 'Sem título No Documento',
          titulo: relatorios[0]?.titulo || 'Sem título',
          topico: relatorios[0]?.topico || 'Sem tópico',
        });
      });
      setRelatorios(relatoriosArray);
    });

    return () => unsubscribe(); // Desinscrever ao desmontar o componente
  }, []);

  
  
 
  const filterRelatorios = (relatorios, filter) => {
    if (!relatorios || !Array.isArray(relatorios)) {
      return [];
    }
  
    return relatorios.filter(
      (relatorio) =>
        relatorio.tituloDocumento &&
        relatorio.tituloDocumento.toLowerCase().includes(filter.toLowerCase())
    );
  };


  const handleEditClick = (relatorioId) => {
    // Define o relatório a ser editado com base no ID
    const relatorioParaEditar = relatorios.find((r) => r.id === relatorioId);
    setRelatorioEditando(relatorioParaEditar);
  };

  const handleCloseEdicao = () => {
    setRelatorioEditando(null);
  };


console.log(relatorios)
  return (
    <div className="pl-[4%] pt-[4%]">
        <div>
            <h1 className="text-[#251B45] font-bold text-4xl">Gerenciamento de relatórios</h1>
            <span className="text-[#828282] ">Crie, edite e visualize todos os relatórios já iniciados</span>
            <button className="bg-[#0CCA98] rounded-lg p-[1%] my-[2%]">+ Criar Relatório</button>
        </div>
      <div className="relative flex-col">
      <div className="my-[1%]">
        <input type="text" placeholder="Pesquisar relatório..." className=" pl-12 pr-4 py-1 font-bold rounded-lg bg-white focus:outline-none focus:shadow-outline" onChange={(e) => setFilter(e.target.value)}/>
        <Image src={search} alt="search" width={15} height={15} className="absolute top-1/2 left-4 transform -translate-y-1/2" />
      </div>
      </div>
      <div className="search-container"></div>
      <table className="table-auto w-full">
        <thead className="rounded-lg bg-[#251B45]">
          <tr className="">
            <th className="rounded-tl-lg px-4 py-2 text-[#FBFAFC]"></th>
            <th className="px-4 py-2 text-[#FBFAFC]">Titulo do Documento</th>
            <th className="px-4 py-2 text-[#FBFAFC]">Titulo</th>
            <th className="px-4 py-2 text-[#FBFAFC]">Topico</th>
            <th className="rounded-tr-lg py-2 text-[#FBFAFC]"></th>
          </tr>
        </thead>
        <tbody>
          {filterRelatorios(relatorios, filter).map((relatorio, index) => {
            return (
              <tr key={relatorio.id}>
                <td>
                  <Image
                    className="ml-5"
                    src={user}
                    alt="bonequinho"
                    width={15}
                    height={15}
                  />
                </td>
                <td className="border pl-10 py-2">{relatorio.tituloDocumento}</td>
                <td className="border pl-10 py-2">{relatorio.titulo}</td>
                <td className="border pl-10 py-2">{relatorio.topico}</td>
                <button
                    onClick={() => handleEditClick(relatorio.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Editar
                  </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      {relatorioEditando && (
        <EdicaoRelatorio
          relatorio={relatorioEditando}
          onClose={handleCloseEdicao}
        />
      )}
    </div>
  );
};

export default TabelaRelatorios;

