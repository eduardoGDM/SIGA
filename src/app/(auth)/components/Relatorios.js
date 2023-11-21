import { useCollectionData } from "@nandorojo/swr-firestore";

const Relatorio = () => {
 const { data: relatorios, error } = useCollectionData("relatorios");

 if (error) {
    return <div>Error: {error.message}</div>;
 }

 if (!relatorios) {
    return <div>Loading...</div>;
 }

 return (
    <div className="p-4">
      {relatorios.map((relatorio) => (
        <div key={relatorio.id} className="mb-4">
          <h1 className="text-2xl font-bold mb-2">{relatorio.titulo}</h1>
          <p>{relatorio.topico}</p>
        </div>
      ))}
    </div>
 );
};

export default Relatorio;