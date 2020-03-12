console.log('Hello World');

//Arvore de natal ASCII
const numLinhas = 10;

for (let i = 0; i < numLinhas; i++) {
    let espacos = ' '.repeat(numLinhas-i);
    let conteudo = 'X'.repeat(i);
    console.log(espacos + conteudo + 'X' + conteudo);
}

console.log((' '.repeat(numLinhas)+'X'+'\n').repeat(4));