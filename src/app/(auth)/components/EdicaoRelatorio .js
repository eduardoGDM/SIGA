// components/BlocoEdicaoRelatorio.js
"use client"
// components/EdicaoRelatorio.js

import { useState } from 'react';

const EdicaoRelatorio = ({ relatorio, onClose }) => {
  const [titulo, setTitulo] = useState(relatorio.titulo);
  const [topico, setTopico] = useState(relatorio.topico);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };

  const handleTopicoChange = (e) => {
    setTopico(e.target.value);
  };

  const handleSalvarClick = () => {
    // Lógica para salvar as alterações no relatório no banco de dados
    // Você precisa implementar essa lógica usando Firebase ou outra solução
    // Pode utilizar a mesma coleção 'relatorios' e o ID do relatório
    console.log('Salvando alterações:', { titulo, topico });

    // Fechar o componente de edição após salvar
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Editar Relatório</h2>
        <label className="block mb-2">
          Título:
          <input
            type="text"
            value={titulo}
            onChange={handleTituloChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-2">
          Tópico:
          <input
            type="text"
            value={topico}
            onChange={handleTopicoChange}
            className="border p-2 w-full"
          />
        </label>
        <div className="flex justify-end">
          <button
            onClick={handleSalvarClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
          >
            Salvar
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EdicaoRelatorio;
