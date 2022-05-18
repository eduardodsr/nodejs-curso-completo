// Vamos utilizar somente o método não bloqueante

const fs = require('fs');

fs.readFile('data.json', (err, data) => {

    if(err) throw err;
    console.log(data);

    fs.unlink('data.json', (unLinkErr) => {

        if (unLinkErr) throw unLinkErr;
        console.log('Arquivo excluído com sucesso!')
    });

});
