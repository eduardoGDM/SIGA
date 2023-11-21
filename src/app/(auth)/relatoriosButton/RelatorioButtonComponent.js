
const RelatorioButtonComponent = ({ alunoId, handleElaborarRelatorio }) => {
 return (
    <button onClick={() => handleElaborarRelatorio(alunoId)}>
      Elaborar Relatório
    </button>
 );
};

export default RelatorioButtonComponent;