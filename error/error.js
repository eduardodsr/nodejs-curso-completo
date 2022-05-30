// Apresenta uma mensagem de ERRO
/*
throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!');
console.log('Depois da execução do erro!'); // não é executado após a mensagem de ERRO!
*/

// trt...catch
// Bloco para testar (try), e especifica uma resposta, caso uma exceção seja lançada.

function execute() {
    executeTo();
}

function executeTo() {
    throw new Error('Ah não, deu erro! Não é possível, na minha máquina funciona!');
}

function init() {
    
    try {
        execute();
    } catch (error) {
        // console.log('Temos um problema!');
        console.log(`Temos um problema! ${error}`);
    }
}

init();
console.log('Depois do Erro');
