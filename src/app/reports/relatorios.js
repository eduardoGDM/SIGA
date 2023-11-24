//// component do makePDF
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function relatoriosPDF(relatorios, selectedAluno) {
    const alunosArray = Object.entries(selectedAluno).map(([nome, valor]) => ({ [nome]: valor }));

    const relatoriosArray = Object.entries(relatorios).map(([nome, valor]) => ({ [nome]: valor }));
//relatoriosArray em branco
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Relatorios',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ];
   
    const dados = relatorios.map((relatorios)=> {
        return [
            { text: relatorios.titulo, fontSize: 10, },
            { text: relatorios.topico, fontSize: 10,  },

    ]
    })
    const dadosAluno = alunosArray.map((alunosArray)=> {
        return [
            { text: alunosArray.nome, fontSize: 10  },
            { text: alunosArray.idade, fontSize: 10, },
            { text: alunosArray.matricula, fontSize: 10  },
           
    ]
    })
    // Conteúdo do relatório
    // const details = [
    //     { text: 'Relatórios:', fontSize: 12, margin: [0, 10, 0, 0] },
    //     relatoriosArray.map(relatorio => [
    //         { text: `nome: ${relatorio.titulo}`, fontSize: 10, margin: [0, 2, 0, 2] },
    //         { text: `Idade: ${relatorio.topico}`, fontSize: 10, margin: [0, 2, 0, 2] },
           
    //     ]),
    // ];

    const details = [
        {
            table: {
                body: [
                    [
                        { text: 'Titulo ', fontSize: 10 },
                        { text: 'Topico', fontSize: 10 },
                        { text: 'matricula', fontSize: 10 },
                       
                       
                    ],
                    ...dadosAluno,
                    //...dados
                    
                ]
            },
           
        }
    ];


   function rodape(currentPage,pageCount){
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
        content: [details],
        footer: rodape,
        styles: {
           
        },
    }
    pdfMake.createPdf(docDefinition).download()
}

export default relatoriosPDF


