require('./subdirectory/sub');
console.log('-----------------------------');

console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório do Arquivo: `,__dirname)
console.log(`Parâmetros de Execução: `, process.argv)

// console.log(`Parâmetros de Execução - Retorna o 3 índice do Array: ${process.argv[3]}`)

console.log(`Ambiente do Servidor: `, process.platform)

// console.log(`Process env (variáveis de ambiente): `, process.env)

console.log(`Process env (USER): `, process.env.USER)
console.log(`Process env (LOGNAME): `, process.env.LOGNAME)
console.log(`Process env (SHELL): `, process.env.SHELL)
console.log(`Process env (HOME): `, process.env.HOME)
console.log(`Process env (PWD: `, process.env.PWD)
console.log(`Process env (LANG): `, process.env.LANG)


