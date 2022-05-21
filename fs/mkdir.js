const fs = require('fs');

const directory = 'projeto/assets/';

const assets = ['css', 'js', 'images', 'fonts', 'lib'];

function make (dir) {

   dir.forEach(item => {
       fs.mkdir(`${directory}/${item}`, { recursive: true }, (err) => {
           if (err) throw err;
           
           console.log(`Foi criado o diretório: ${item}`);
       })
   });
}

make(assets);

/*
Foi criado o diretório: css
Foi criado o diretório: images
Foi criado o diretório: js
Foi criado o diretório: fonts
Foi criado o diretório: lib
*/
