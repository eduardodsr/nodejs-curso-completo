// EventEmitter -> Manipulando Erros com Eventos

// initialize
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// validated object
const validaObjeto = (data) => {
    if (typeof data !== 'object') {
        eventEmitter('Error', new Error('Tipo de dado inválido!'));
    } else {
        console.log('Objeto válido!');
    }
}

// addListener -> espera de evento
eventEmitter.addListener('error', (err) => {
    console.log('Event: ' + err);
})

// object create
let dados = { 
    name: 'Hcode Treinamentos',
    course: 'NodeJS'
}

// Execute -> Chamando a função validaObjetivo (verifica se é um objeto)
validaObjeto(dados); 
// Return: 
// Objeto válido!

console.log(dados.name + ' - ' + dados.course);

