# Node JS Curso Completo do Básico ao Avançado 


## Sobre este curso

- Udemy: HCODE
- NodeJS do zero ao avançado, Mongo DB, REST API, Internet das Coisas IoT, segurança, Express JS.

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

  - Terminal - comandos:

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
- Criar o arquivo **server.js**

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

- Abrir o navegador (Browser)

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

<!-- 
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

-->

9. NPM vs Yarn

O **NPM** é uma ferramenta do Node. js para o gerenciamento de pacotes. Ele permite instalar, desinstalar e atualizar dependências em uma aplicação por meio de uma simples instrução na linha de comando. Sempre que um projeto é criado por meio do gerenciador, é adicionado um arquivo chamado package.

- NPM e Yarn
    - Gerenciador de Pacotes. 

- NPM
    - https://www.npmjs.com/
    - npm install
        -   Local:
            - npm install &lt;package&gt;
            - npm install bootstrap
        -   Global:
            - npm install -g &lt;package&gt;
- Yarn
    - https://yarnpkg.com/
    - yarn install
        -   Local:
            - yarn add &lt;package&gt;
            - yarn add bootstrap
        -   Global:
            - yarn add global &lt;package&gt;

<br>

- Diferenças entre o NPM e o Yarn:
    - O NPM já vem instalado com o Node JS;
    - O Yarn é necessário realizar a instalação;
    - O Yarn é mais rápido, garante os pacotes das dependencias sejam instaladas na mesma ordem.

10. O Arquivo package.json

O arquivo **package.json** é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.

O **package-lock.json** é uma larga lista de dependências listadas no seu package.json, além de especificar a versão exata que deve ser instalado, a localização do módulo (URI), o hash que verifica a integridade do módulo e a lista de pacotes necessários.

O **Gerenciador de pacotes** do Node.js (**npm**) é o gerenciador de pacotes padrão e o mais popular no ecossistema do Node.js, sendo usado principalmente para instalar e gerenciar módulos externos em um projeto do Node.js. Ele também é comumente usado para instalar uma ampla faixa de ferramentas CLI e executar scripts de projeto. O **npm** rastreia os módulos instalados em um projeto com o arquivo **package.json**, que reside em um diretório de projeto e contém:

- Todos os módulos necessários para um projeto e suas versões instaladas;
- Todos os metadados para um projeto, como o autor, a licença, etc.
- Scripts que podem ser executados para automatizar tarefas dentro do projeto.

#### Inicializar o projeto (iniciar o repositório em uma pasta do projeto):

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

A pasta <code> node_modulos </code> é instalada dentro da pasta principal (raiz) do projeto. Ela é uma pasta muito pesada.

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

#### Perguntas

Você se Lembra: NodeJS Instalação e Configuração

##### Pergunta 1:
Qual o nome dado ao arquivo de configuração de um projeto Node.JS que contempla as dependências do projeto, bem como tipo de licença e descrição?

- package.json

##### Pergunta 2:
Qual comando utilizamos para iniciar um repositório git em uma pasta?

- git init

##### Pergunta 3:
Qual comando utilizamos para instalar um módulo presente no NPM utilizando Yarn?

- yarn add < modulo >

##### Pergunta 4:
Qual diretório deve ser adicionado ao arquivo .gitignore e por qual motivo?

- node_modules, uma vez que package.json deverá conter os módulos como dependência, é
desnecessário subir a pasta node_modules para um repositório git.



### 2. Conceitos Fundamentais do NodeJS

12. Blocking Vs Non Blocking

-  **Blocking** / ( readFile**Sync** ) /  **síncrona**

-  **Non Blocking** / ( readFile ) / **assíncrona** (criar um callback)

<br>


- Ex. Chamada bloqueante ( **Blocking** ) / ( readFile**Sync** ) /  **síncrona**

```js
const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(6));

console.log('Antes da leitura do arquivo');

const dados = fs.readFileSync('README.md'); // conexão bloqueante

console.log('Executando o console após o arquivo');

console.log((process.hrtime()[0]/60).toFixed(6));
```

<br>


- Ex. Chamada não-bloqueante ( **Non Blocking** ) / ( readFile ) / **assíncrona** (criar um callback)

```js
const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(6));

console.log('Antes da leitura do arquivo');

// conexão não bloqueante

const dados = fs.readFile('README.md', (err, data) => { 

    if (err) throw err;

    console.log("Terminei a leitura do arquivo README");
});

console.log('Executando o console após o arquivo');

console.log((process.hrtime()[0]/60).toFixed(6)); 
```

<br>

- Métodos **bloqueantes** executam de forma **síncrona** (palavra chave **Sync**). 

  - Ser bloqueante é quando a execução do código precisa esperar até que uma operação seja completada. Isso acontece porque o **event loop** é incapaz de continuar executando JavaScript enquanto uma operação bloqueante está sendo executada.
  - Então, na Operação Bloqueante ( Blocking ) faço uma ação, enquanto ela não termina não consigo fazer a próxima ação.

<br>

- Métodos **não-bloqueantes** executam de forma **assíncrona** (callbacks)
  - Executa várias coisas ao mesmo tempo de forma concorrente.

---

#### Visão geral sobre operações bloqueantes e não-bloqueantes

https://nodejs.org/pt-br/docs/guides/blocking-vs-non-blocking/

- Conexão/Chamada bloqueantes ( Blocking )
- Conexão/Chamada não-bloqueantes ( Non Blocking )

#### Chamadas bloqueantes

Ser bloqueante é quando a execução do código precisa esperar até que uma operação não-JavaScript seja completada. Isso acontece porque o **event loop** é incapaz de continuar executando JavaScript enquanto uma operação bloqueante está sendo executada.

Todos os métodos I/O na biblioteca padrão do Node.js tem uma versão assíncrona, que, por definição, são **não-bloqueantes**, e aceitam funções de **callback.** Alguns métodos também tem suas versões **bloqueantes**, que possuem o sufixo **Sync** no nome.

#### Comparando códigos

- Métodos **bloqueantes** executam de forma **síncrona** (Sync)
  - _fs.readFileSync( )_

- Métodos **não-bloqueantes** executam de forma **assíncrona** (callbacks)
  - _fs.readFile( )_

```js
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // a execução é bloqueada aqui até o arquivo ser lido
```

E aqui temos um exemplo equivalente usando um método **assíncrono**:

```js
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```

O primeiro exemplo parece mais simples do que o segundo, mas ele possui o contra de que, na segunda linha, temos um código bloqueando a execução de qualquer JavaScript adicional até que todo o arquivo seja lido. Note que, na **versão síncrona**, qualquer erro que houver na aplicação vai precisar ser tratado ou então o processo vai sofrer um crash. Na **versão assíncrona,** é da decisão do programador se quer ou não tratar os erros.

```js
const fs = require('fs');
const data = fs.readFileSync('./file.txt'); // trava aqui até o arquivo ser lido
console.log(data);

maisProcessamento(); // roda depois de console.log
```

Um exemplo similar, mas não equivalente, no formato **assíncrono**:

```js
const fs = require('fs');
fs.readFile('./file.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});

maisProcessamento(); // vai rodar antes do console.log
```

No primeiro exemplo acima, <code> console.log </code> vai ser chamado antes de <code> maisProcessamento() </code>. 

No segundo exemplo, <code> fs.readFile() </code> é uma operação não-bloqueante, então a execução de código JavaScript vai continuar e o método <code> maisProcessamento() </code> vai ser chamado primeiro. 

A habilidade de executar <code> maisProcessamento() </code> sem ter de esperar o arquivo ser completamente lido é um conceito chave de design que permite uma melhor escalabilidade através de mais rendimento.

---

13. Concorrência e Taxa de Transferência

#### Concorrência e Rendimento

A execução padrão do JavaScript no Node.js é **single threaded** (processo numa única trilha), ou seja, acontece é um único processo. 

Então a **concorrência** é referente somente à capacidade do **event loop** de executar funções de **callback** depois de completar qualquer outro processamento, ou seja, executar funções em paralelo. 

Qualquer código que pode rodar de maneira concorrente deve permitir que o event loop continue executando enquanto uma operação não-JavaScript, como I/O, está sendo executada.

Portanto, o ideal é utilizar os Métodos Não-Bloqueantes ( Non Blocking ) para executar processos em paralelo (concorrência), o código fica com mais performace. Reduz o tempo de processamento e melhora a resposta.

14. Cuidados ao utilizar Blocking e Non Blocking

Ao utilizar os Métodos Não-Bloqueantese e Bloqueantes juntos podem apresentar problema!

Por exemplo, aqui estamos utilizando os dois métodos juntos, vamos ler um arquivo e excluir o arquivo de imediato, sem aguardar o termino da leitura do Buffer:

```js
// Vamos ler um arquivo e excluir o arquivo

const fs = require('fs');

// método não bloqueante
fs.readFile('data.json', (err, data) => {

    if(err) throw err;
    console.log(data);
});

fs.unlinkSync('data.json'); // método bloqueante
```

Exemplo com correção do problema acima:

```js
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
```

Dica: Seguir o mesmo padrão, não misturar o seu código bloqueante com não bloqueante!


15. NodeJS Entendendo o Núcleo

#### NodeJS

- O Node.js &rarr; é um ambiente de tempo de execução JavaScript de código aberto e multiplataforma.

- O Node.js executa o motor JavaScript V8, o núcleo do Google Chrome, fora do navegador. Isso permite que o Node.js seja muito eficiente.

- o Node.js é um runtime JavaScript server-side, ou seja, uma solução que possibilita ao desenvolvedor executar aplicações escritas em JavaScript do lado do servidor, de forma simples, rápida e performática. Isso é possível basicamente graças ao motor V8 e a biblioteca libuv, solução open-source para a qual dedicaremos mais algumas linhas logo adiante.

#### NodeJS o Núcleo

Como funciona o NodeJS INTERNAMENTE?

- É um ambiente de execução JavaScript sob o V8 JavaScript Engine.
- Utiliza Programação Dirigida ao Evento – Event Drive Programming. (Programação reativa &rarr; callbacks)
- Utiliza Métodos não bloqueantes de entrada e saída de dados i/o. Permitindo ser leve e eficiente.

<br>

- **NodeJS o Núcleo** - Funcionamento interno:

  - Application Code (JS)

    - C/C++ Binginds 
      - V8  
      - Libuv &rarr; Event Loop
      - c-ares (DNS)
    
    - Addons
      - http-parser
      - crypto (OpenSSL)
      - zliv (compression)

- **I/O**

  - Input / Output (Entrada / Saída)
    - File System
    - Network
    - DNS

- **Libuv**

  - Libuv é uma biblioteca de suporte multiplataforma com foco em E/S assíncrona.

  - Libuv é uma biblioteca C/C++ usada para abstrair operações de E/S sem bloqueio para uma interface consistente em todas as plataformas suportadas. Ele fornece mecanismos para lidar com sistema de arquivos, DNS, rede, child processes (processos filho), pipes, signal handling (manipulação de sinal), polling e streaming. 


16. NodeJS Single-Thread ou Multi-Thread?

#### Single-Thread

O Node.js é uma plataforma orientada a eventos que utiliza o conceito de thread única para gerenciar a pilha de eventos ou pilha de chamada (Call Stack), que por sinal adota o comportamento do tipo LIFO (última entrada, primeira saída). As operações de background no Node são gerenciadas por **works** que rodam em segundo plano, estes sim podem conter operações multi-thread.

#### Multi-Thread (Multiprocessamento / thread-pool) 

Multi-Thread &rarr; A **Libuv** em alguns casos especificos, fornece um único processo que dispara vários Thread que são executados ao mesmo tempo. A qual utiliza um **thread-pool** (4 Thread de processamento - 4 núcleos de processamento de forma assíncrona) para gerenciar operações paralelas.

E estes tais **works**, afinal de contas o que são?
Os works são processos em background de I/O assíncrono não bloqueastes gerenciados pela **libuv**, uma biblioteca open source multiplataforma escrita em linguagem C++, a qual utiliza um **thread-pool** para gerenciar operações paralelas. Este comportamento de thread única para manipulação da Call Stack é o que garante tanta performance a essa plataforma.

https://nodejs.org/pt-br/docs/

Exemplo:

<code> un.js </code>

```js
const crypto = require('crypto'); // OpenSSL

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
```


<code> &rarr; Run 🖥️ &lt;un.js&gt; </code>

```js
node test.js
// thread-pool (4 Thread - processamento de forma assíncrona, operações paralelas)
Hash: 2498
Hash: 2554
Hash: 2569
Hash: 2587
// (5 Thread - demora mais tempo para processar, operação não paralela)
Hash: 3383
```


17. A Libuv - Event Loop

#### Event-Loop

O Event-Loop (Loop de Eventos) é o que permite que o Node.js execute operações de I/O, Input/Output, ou seja, E/S (Entrada/Saída) sem bloqueio — apesar do JavaScript ser de Single-Thread (Thread único) — descarregando as operações para o kernel do sistema sempre que possível.

Como a maioria dos kernels modernos são Multi-Thread, eles podem lidar com várias operações em execução em segundo plano. Quando uma dessas operações é concluída, o kernel informa ao Node.js para que o retorno de chamada apropriado possa ser adicionado à fila de pesquisa para eventualmente ser executado. 

https://medium.com/@mmoshikoo/event-loop-in-nodejs-visualized-235867255e81
https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
http://docs.libuv.org/en/v1.x/design.html


O diagrama a seguir mostra uma visão geral simplificada da ordem de operações do Event-Loop (Loop de Eventos).

```markdown
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```
<code> Cada caixa será referida como uma "fase" do loop de eventos. </code>

Cada fase tem uma fila FIFO de callbacks para executar. Embora cada fase seja especial à sua maneira, geralmente, quando o **Event Loop** entra em uma determinada fase, ele realizará qualquer operação específica para essa fase e, em seguida, executará **callbacks** (retornos de chamada) na fila dessa fase até que a fila se esgote ou o número máximo de retornos de chamada executou. Quando a fila estiver esgotada ou o limite de retorno de chamada for atingido, o loop de eventos passará para a próxima fase e assim por diante.

Como qualquer uma dessas operações pode agendar mais operações e novos eventos processados ​​na fase de polling são enfileirados pelo kernel, os eventos de polling podem ser enfileirados enquanto os eventos de **poll** estão sendo processados. Como resultado, **callbacks** (retornos de chamada) de longa duração podem permitir que a **pool fase** (fase de sondagem) seja executada por muito mais tempo do que o **timer's** threshold (cronômetro). 

#### Visão geral das fases

- **timers** : esta fase executa os callbacks agendados por: _setTimeout( )_ e _setInterval( )_.

- **pending callbacks (chamadas de retorno pendentes)** : executa I/O callbacks deferred (retornos de chamada de E/S adiados) para a próxima iteração do loop. (Network & disk & child processes)

- **idle & prepare (ocioso & preparado)** : usado apenas internamente.

- **poll** : recupera novos I/O events (novos eventos de E/S); executar **callbacks**, scheduled by **timers** (agendado por temporizadores): _setTimeout( )_ e _setInterval( )_.

- **check** : _setImmediate( ) e **callbacks** são invocados aqui.

- **close callbacks ("close" events")** : alguns callbacks próximos, por exemplo socket.on ('close', ...).

Entre cada execução do Event-Loop (loop de eventos), o Node.js verifica se está aguardando qualquer E/S ou temporizadores assíncronos e se não houver nenhum é encerrado corretamente.


#### Perguntas

Você se lembra: NodeJS Conceitos Fundamentais.
Vamos relembrar como a estrutura do NodeJS funciona e como isso afeta a forma como programamos em NodeJS.

##### Pergunta 2:
Qual comando podemos utilizar para finalizar a execução de um Script rodando pelo node e interrompendo o Event Loop?

- process.exit();


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
