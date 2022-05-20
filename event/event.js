const EventEmitter = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento();

// subscriber - assinante

meuEvento.on('seguranca', (x, y) => {
    console.log(`Executando o evento "segurança": ${x} ${y}`)
})

// publisher - emissor

meuEvento.emit('seguranca', 'evento X', 'evento Y');

meuEvento.on('encerrar', (dados) => {
    console.log(`Assinantes: ${dados}`);
})

meuEvento.emit('encerrar', 'Encerrando a execução da importação de dados!');