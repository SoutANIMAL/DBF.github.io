const produtos = [
    {nome: 'Coxa diminuta', preco:3.5},
    {nome: 'Pastel', preco: 3.0},
    {nome: 'Coca-cola', preco: 2.5}
];

let exibirProduto = (p, i) => {
    console.log(i+ '. ' + p.nome + 'R$ ' + p.preco.toFixed(2));
};

console.log('Lista de produtos:');
produtos.forEach(exibirProduto);

console.log('\nProdutos de menos de R$ 3,00:');
produtos.filter(p => p.preco <= 3).forEach(exibirProduto);

console.log('\nAumento de 30% dos precos em todos os produtos:');
produtos.map(p => {
    return {
        nome:p.nome,
        preco: p.preco *=1.3
    }
}).forEach(exibirProduto);