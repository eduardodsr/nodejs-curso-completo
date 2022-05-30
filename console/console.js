// log

console.log('Exibindo uma mensagem no console');

// erro

console.error(new Error('Exibindo mensagem de erro, temos problemas!'));

// table

const carros = ['GM', 'FIAT', 'FORD', 'VW','Renault','Honda', 'Hyundai'];

console.table(carros);

// table

const dados = { name: 'Eduardo', empresa: 'Freelancer' }

console.table(dados);

// count

console.count('processo'); // processo: 1
console.count('processo'); // processo: 2
console.count('processo'); // processo: 3

// countReset

console.log('Resetando o processo');
console.countReset('processo');
console.count('processo'); // processo: 1

// time & timeEnd

console.time('contador');

for(let index = 0; index < 3; index++) {
    console.log('-');
}

console.timeEnd('contador');

// assert -> Exibe uma condição se ela falhar (false)

console.assert(true, 'TRUE'); // não mostra nada!

console.assert(false, '%s, não funcinou!', 'FALSE'); // mostra a mensagem

// clear -> Limpa todos os dados do console

console.clear();
