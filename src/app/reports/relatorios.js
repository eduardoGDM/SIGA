//// component do makePDF
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function relatoriosPDF(relatorios, selectedAluno) {
    const relatoriosArray = Object.entries(relatorios).map(([nome, valor]) => ({ [nome]: valor }));

    const alunosArray = Object.entries(selectedAluno).map(([nome, valor]) => ({ [nome]: valor }));

    console.log(relatoriosArray)
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Relatorios',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ];
   

    // Conteúdo do relatório
    const content = [
        
        { text: 'Relatórios:', fontSize: 12, margin: [0, 10, 0, 0] },
        relatoriosArray.map(relatorio => [
            { text: `nome: ${relatorio.nome}`, fontSize: 10, margin: [0, 2, 0, 2] },
            { text: `Idade: ${relatorio.idade}`, fontSize: 10, margin: [0, 2, 0, 2] },
            { text: `serie: ${relatorio.serie}`, fontSize: 10, margin: [0, 2, 0, 2] },
            { text: `turno: ${relatorio.turno}`, fontSize: 10, margin: [0, 2, 0, 2] },
            { text: `pai: ${relatorio.pai}`, fontSize: 10, margin: [0, 2, 0, 2] },
            { text: `mae: ${relatorio.mae}`, fontSize: 10, margin: [0, 2, 0, 2] },


        ]),
    ];

    const details = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*','*'],
                body: [
                    [{ text: 'Título', style: 'tableHeader', fontSize: 10 }],
                    ...alunosArray.map(aluno => [
                        { text: `Título: ${aluno.id}`, fontSize: 10, margin: [0, 2, 0, 2] },
                        { text: `Aluno: ${aluno.nome}`, fontSize: 10, margin: [0, 2, 0, 2] },
                        { text: `Idade: ${aluno.idade}`, fontSize: 10, margin: [0, 2, 0, 2] },

                    ]),
                ]
            },
            layout: 'headerLineOnly'
        }
    ];


   function Rodape(currentPage,pageCount){
    return[
        {
            text:currentPage + '/' + pageCount,
            alignment:'right',
            fontSize:9,
            bold:true,
            margin:[0,10,20,0]
        }
    ]
   }
    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [content],
        footer: Rodape,
        styles: {
            tableHeader: {
                bold: true,
                fontSize: 10,
                alignment: 'left',
                color: 'black',
            }
        },
    }
    pdfMake.createPdf(docDefinition).download()
}

export default relatoriosPDF


