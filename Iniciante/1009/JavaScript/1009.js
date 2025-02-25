let nomeVendedor = prompt();
let salario = parseFloat(prompt());
let totalVendas = parseFloat(prompt());
let comissao = totalVendas * 0.15;
let total = salario + comissao;
console.log(`TOTAL = R$ ${total.toFixed(2)}`);
