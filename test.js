const crypto = require('crypto'); // openSSL
const start = Date.now();

function logHastTime() {

    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log(`Hash: ${Date.now() - start}`);
    });
}

// thread-pool (4 Thread núcleos de processamento de forma assíncrona para gerenciar operações paralelas).
logHastTime();
logHastTime();
logHastTime();
logHastTime(); 

// Ao colocar um 5 Thread, repare que ele demora mais tempo para processar.
logHastTime();