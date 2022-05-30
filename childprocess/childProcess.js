const { spawn } = require('child_process');

// const ls = spawn('ls');

// const ls = spawn('ls', ['-Slh', '../']); // lista todos os arquivos do diretorio anterior

const ls = spawn('ls', ['-Slh']); // lista todos os arquivos do diretorio atual

// https://www.certificacaolinux.com.br/comando-linux-ls/
// ls -Slh 
// ls -S => ordenada por tamanho
// ls -lh => mostra lista de arquivo (tabela em colunas formatada)

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
    console.log(`Processo em segundo plano finalizado com o código ${code}`)
})
