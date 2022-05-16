# Node JS Curso Completo do Básico ao Avançado

Udemy - HCODE

## Sobre este curso

NodeJS do zero ao avançado, Mongo DB, REST API, Internet das Coisas IoT, segurança, Express JS.

## O que você aprenderá

- Fundamentos do NodeJS e as principais APIs Nativas do NodeJS 12
- Criação de Módulos com NodeJS
- Criando CLI com NodeJS
- IoT - Controlando um Drone com NodeJS
- Comprimindo Vídeos com FFMPEG
- Criar uma REST API com MongoDB
- Upload de Arquivos com Multer

## Conteúdo do curso

11 seções • 84 aulas • Duração total: 10h

### 1. Introdução

2. Estrutura do NodeJS

- O que é NodeJS?

  - É uma plataforma para execução do JavaScript no Lado do Servidor.

- Criador

  - Ryam Dahl

- Diferenças do JavaScript

  - Client/Server

- O que as Muitos sabem sobre NodeJS

  - A Superficie
    - npm
    - package.json
    - node_modules

- Como o NodeJS é Estruturado?

  - Core Concepts
  - API Nativas
  - API de Terceiros

- V8 JavaScript Engine
  - V8 Project page: https://v8.dev/docs
  - GitHub - Link: https://github.com/v8/v8

3. Instalando e Configurando o NodeJS

- https://nodejs.org/

- Terminal

```js
node --version

npm --version
```

4. Instalando o Git e Configurando Repositório Remoto GitHub

- https://git-scm.com/
- https://github.com/

5. Instalando Terminal Cmder para Windows

- https://cmder.net/

6. Instalando e Configurando Visual Studio Code

- https://code.visualstudio.com/

7. Primeiro Script com NodeJS

- Subir um servidor Web com poucas linhas de código com o Node.js

<code> server.js </code>

```js
const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Ola Mundo! \n Meu Primeiro Script');
});

server.listen(port, host, () => {
  console.log(`Server running ate http://${host}:${port}`);
});

```

<code> &rarr; Run 🖥️ &lt;server.js&gt; </code>

```js
node server.js

Server running ate http://127.0.0.1:3000
```

- Acessar ao Browser

http://localhost:3000

```html
Ola Mundo! 
 Meu Primeiro Script
```

8. Utilizando Nodeschool.io

- Workshops de código aberto que ensinam habilidades de software da web (desafios).
    - https://nodeschool.io/

- Vamos utilizar:
    - learnyounode (Aprenda o seu Node)

Instalar o <code> learnyounode </code>:

```js
npm install -g learnyounode
```

No Terminal - Executar:

```js
learnyounode // Executar o learnyounode

>> HELLO WORLD // Selecionar o primeiro desafio
```

Desafio (HELLO WORLD):

```JS
# LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## HELLO WORLD (Exercise 1 of 13)  
   
  Create a file named hello-world.js.  
   
  Write a program that prints the text "HELLO WORLD" to the console  
  (stdout).       
```

Executar: <code> learnyounode run hello-world.js </code>

```js
learnyounode run hello-world.js 

HELLO WORLD
```

Verificar seu código está correto: 

<code> learnyounode verify hello-world.js </code>

9. NPM vs Yarn

O **NPM** é uma ferramenta do Node. js para o gerenciamento de pacotes. Ele permite instalar, desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando. Sempre que um projeto é criado por meio do gerenciador, é adicionado um arquivo chamado package.

- NPM e Yarn
    - Gerenciador de Pacotes. 

- NPM
    - https://www.npmjs.com/
    - _npm install_
        -   Local:
            - npm install &lt;package&gt;
            - npm install bootstrap
        -   Global:
            - npm install -g &lt;package&gt;
- Yarn
    - https://yarnpkg.com/
    - _yarn install_
        -   Local:
            - yarn add &lt;package&gt;
            - yarn add bootstrap
        -   Global:
            - yarn add global &lt;package&gt;

<br>

- Diferenças entre o NPM e o Yarn:
    - O NPM já vem instalado com o NodeSJ;
    - O Yarn é necessário realizar a instalação;
    - O Yarn é mais rápido, garante os pacotes das dependencias sejam instaladas na mesma ordem.

10. O Arquivo package.json

O arquivo **package.json** é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.

O **package-lock.json** é uma larga lista de dependências listadas no seu package.json, além de especificar a versão exata que deve ser instalado, a localização do módulo (URI), o hash que verifica a integridade do módulo e a lista de pacotes necessários.

O **Gerenciador de pacotes** do Node.js (**npm**) é o gerenciador de pacotes padrão e o mais popular no ecossistema do Node.js, sendo usado principalmente para instalar e gerenciar módulos externos em um projeto do Node.js. Ele também é comumente usado para instalar uma ampla faixa de ferramentas CLI e executar scripts de projeto. O **npm** rastreia os módulos instalados em um projeto com o arquivo **package.json**, que reside em um diretório de projeto e contém:

- Todos os módulos necessários para um projeto e suas versões instaladas;
- Todos os metadados para um projeto, como o autor, a licença, etc.
- Scripts que podem ser executados para automatizar tarefas dentro do projeto.

#### Inicializar o projeto:

- Vamos gerar o nosso arquivo <code> package.json </code>

```js
npm init
// ou
npm init -y
```

#### Instalar módulos:

```js
$ npm install <module>
// ou
$ npm i <module>
```

11. A Pasta node_modules e Git Ignore

#### node_modules

Todos os arquivos que nós baixamos via o Gerenciador de Pacote (NPM ou Yarn) eles vêm parar nessa pasta de node_modulos.

A pasta <code> node_modulos </code> é instalada dentro da pasta principal (raiz) do projeto.

Portanto, não enviamos a pasta <code> node_modulos </code> para p GitHub.

#### Arquivos gerados automaticamente: node_modules

Quando você instala um pacote em um projeto do Node.js pela primeira vez, o npm cria automaticamente a pasta **node_modules**. 

A pasta **node_modules** contém todas as dependências instaladas para o seu projeto. Na maioria dos casos, você não deve enviar essa pasta em seu repositório controlado por versão. Conforme instala mais dependências, o tamanho dessa pasta crescerá rapidamente. Além disso, o arquivo package-lock.json mantém um registro das versões exatas instaladas de uma maneira mais sucinta. Assim, incluir o node_modules não é necessário.

#### .gitignore

Vamos criar o arquivo chamado .gitignore (arquivos e pastas que devem ser ignoradas pelo Git):

<code> .gitignore </code>

```js
# Arquivos e pasta que devem ser ignorados 

node_modules/

*.zip
*.rar
```


12. Você se Lembra: NodeJS Instalação e Configuração

### 2. Conceitos Fundamentais do NodeJS

11. Blocking Vs Non Blocking
12. Concorrência e Taxa de Transferência
13. Cuidados ao utilizar Blocking e Non Blocking
14. NodeJS Entendendo o Núcleo
15. NodeJS Single Thread ou Multithread?
16. A Libuv - Event Loop
17. Você se lembra: NodeJS Conceitos Fundamentais

### 3. Controlando o Fluxo de uma Aplicação NodeJS

18. Instalando o Nodemon
19. Ciclo de Vida de uma aplicação NodeJS
20. Entendendo Funções de Retorno - Callback Functions
21. Programação Assíncrona com Promises
22. Entendendo Async/Await
23. Programação Dirigida ao Evento
24. Variáveis internas e o objeto process

### 4. API's Nativas do NodeJS

25. HTTP - Criando um Servidor Web
26. File System - FS - Lendo Arquivos e Pastas
27. File System - FS - Criando Arquivos e Pastas
28. Trabalhando com o módulo utils - Promisify
29. HTTP, FS - Lendo Arquivo HTML e renderizando na Tela
30. Conhecendo a API de Console
31. Events - Controlando eventos com Event Emitter
32. Child Process - Criando Processo em Segundo Plano
33. Path - Manipulando o Caminho de Arquivos e Pastas
34. Error - Manipulando Erros
35. Buffer - Manipulando dados binários

### 5. Trabalhando com Módulos no NodeJS

36. Criando uma aplicação NPM init
37. Criando Módulos
38. Importando e Exportando Módulos
39. Importando Módulos Nativos com NodeJS 12

### 6. Compressão de Vídeos com FFMPEG e NodeJS

40. Instalando FFMPEG para Compressão e Codificação de Vídeos
41. Executando Processo em Segundo Plano com Child_Process
42. Criando a chamada para compressão dos vídeos
43. Passando parâmetros com process.argv para compressão de vídeos com FFMPE

### 7. Drone - Criando CLI - IoT - Controlando Drone Dji Tello

44. Conhecendo o DJI Tello
45. Desenvolvendo utilizando SDK DJI
46. Criando CLI com API nativa ReadLine
47. Criando a Classe Commander
48. Criando a Classe CommandParser
49. Enviando Comandos para o Drone
50. Decolando e Pousando o Drone
51. Rotacionando o Drone
52. Executando Flip no Drone
53. Código Final do Projeto

### 8. API's de Terceiros - Express

54. Instalando Express
55. Criando uma aplicação web com Express
56. Criando rotas com Express
57. Criando um Middleware para Express
58. Utilizando Funções Middleware de terceiros
59. Utilizando funções Middleware para tratamento de erros
60. Servindo arquivos estáticos com Express

### 9. Criando um Sistema de Upload de Arquivos

55. Configurando Multer
56. Criando Formulário HTML
57. Utilizando Multer Storage
58. Criando a Rota POST e Enviando arquivo para Upload

### 10. MongoDB

59. Instalando e Configurando MongoDB
60. Criando Schema e Collection
61. Criando Documentos - InsertOne e InsertMany
62. MongoDB - Find
63. MongoDB - Update
64. MongoDB - Delete

### 11. REST API com NodeJS e MongoDB

65. Criando REST API com NodeJS e MongoDB
66. Criando o diretório, instalando Express, Mongoose, dotenv e Nodemon
67. Iniciando Servidor Express
68. Acessando Banco de Dados MongoDB com NodeJS
69. Carregando variáveis de ambiente e aceitando formato JSON
70. Criando o diretório e arquivos de Rotas
71. Testando as Rotas com REST Client
72. Testando as Rotas com POSTMAN
73. Criando Model com Mongoose
74. Rotas - Inserindo e Consultando Assinantes - Post e Get
75. Criando uma função Middleware para validar o ID
76. Consultando um registro com parâmetros - Get :id
77. Excluindo um Registro - Delete
78. Alterando um registro - Patch
