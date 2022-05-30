const path = require('path');

// path.basename(path[, ext]) -> apresenta somente o nome do arquivo
// =================================================================

console.log(path.basename('/Users/eduardo/Dev/node/index.html'));
// Returns: 'index.html'

console.log(path.basename('/Users/eduardo/Dev/node/index.html', '.html'));
// Returns: 'index'


// path.normalize(path) -> Arrumar as barras, ou seja, normaliza o caminho
// =======================================================================

console.log(path.normalize('Users/eduardo/Dev//node/index.html')); 
// Returns: '/Users/eduardo/Downloads/Dev/nodejs-curso-completo'

console.log(path.normalize('Users/eduardo/Dev//node/dir/..'));
// Returns: 'Users/eduardo/Dev/node'


// path.join([...paths]) -> Montar um caminho
// ==========================================

console.log(path.join('/one', 'two', 'three/four'));        // Returns: '/one/two/three/four'
console.log(path.join('/one', 'two', 'three/four', '..'));  // Returns: '/one/two/three'


// path.resolve -> Apresenta o caminho absoluto do arquivo (caminho absoluto é o nome completo do caminho)
// =======================================================================================================

console.log(path.resolve('index.html'));
// Returns: '/Users/eduardo/Downloads/Dev/nodejs-curso-completo/path/index.html'


// path.dirname(path) - Apresenta o caminho relativo do arquivo (diretório atual onde o usuário está localizado)
// =============================================================================================================

console.log(path.dirname('/Users/eduardo/Downloads/Dev/nodejs-curso-completo/index.html'));
// Returns: '/Users/eduardo/Downloads/Dev/nodejs-curso-completo'


// path.extname(path) - Retorna a extensão do arquivo
// ==================================================

console.log(path.extname('index.html'));
// Returns: '.html'

console.log(path.extname('README.md'));
// Returns: '.md'

console.log(path.extname('index.'));
// Returns: '.'

console.log(path.extname('index'));
// Returns: ''


// path.parse(path) - Retorna um objeto com as propriedades (dir, root, base, name e ext)
// =======================================================================================

console.log(path.parse('/home/user/dir/file.txt'));

// Returns:
// { 
//   root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' 
// }



/*

const path= require('path')

console.log('basename:', path.basename('c:\\temp\\arquivo.html'))
console.log('normalize:',path.normalize('c:\\temp/dir//subdir/dir/..'))
console.log('join path:', path.join('/teste','teste2','teste3/teste4','dir2','.'))
console.log('resolve:', path.resolve('path.js'))
console.log('extension:', path.extname('path.js'))

*/