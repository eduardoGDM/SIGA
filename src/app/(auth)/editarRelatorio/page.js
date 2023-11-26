"use client"

// pages/editar-relatorio/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../services/firebaseConfig';

const EditarRelatorio = () => {
  const router = useRouter();
  const { id } = router.query;
  const [relatorio, setRelatorio] = useState(null);

  useEffect(() => {
    const fetchRelatorio = async () => {
      const relatorioRef = db.collection('relatorios').doc(id);
      const relatorioDoc = await relatorioRef.get();

      if (relatorioDoc.exists) {
        setRelatorio(relatorioDoc.data());
      } else {
        // Lidar com o relatório não encontrado
      }
    };

    if (id) {
      fetchRelatorio();
    }
  }, [id]);

  if (!relatorio) {
    // Pode exibir um indicador de carregamento
    return <div>Carregando...</div>;
  }

  // Renderize os detalhes do relatório para edição
  return (
    <div>
      <h1>Editar Relatório</h1>
      {/* Adicione os campos de edição para os títulos e tópicos do relatório */}
    </div>
  );
};

export default EditarRelatorio;
