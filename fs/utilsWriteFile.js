const { promisify } = require('util');

const writeFile = promisify(require('fs').writeFile);

const file = 'utilFile.txt';

const content = `Criando um arquivo utilizando promisify do módulo nativo util`;


writeFile(file, content)
    .then( () => console.log(`Arquivo ${file} foi criado com sucesso!`) )
    .catch( (err) => console.log(`Erro: ${err}`) )