const { writeFile } = require('fs');

const file = 'arquivo.txt';

writeFile(file, 'Criando arquivo de texto com writeFile!', err => {
    if (err) throw err;

    console.log(`O arquivo ${file} foi criado com sucesso!`);
    // O arquivo arquivo.txt foi criado com sucesso!
    // Conteúdo do arquivo.txt: "Criando arquivo de texto com writeFile!"
})