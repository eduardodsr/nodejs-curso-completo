const { writeFile } = require('fs');

function createFile(name, content) {
    return new Promise( (resolve, reject) => {

        writeFile(name, content, err => {
            if (err) return reject(err);
            resolve();
        }) 
    })
}

const file = 'promiseFile.txt';

createFile(file, `Criando um arquivo ${file} utilizando promises!`)
    .then( () => console.log(`Arquivo ${file} foi criado com sucesso!`) )
    .catch(err => console.log(err))
