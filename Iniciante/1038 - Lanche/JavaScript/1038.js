function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  const compra = lines.map((item) => parseInt(item, 10));
  const cardapio = produtos();

  console.log(`Total: R$ ${conta(cardapio, compra).toFixed(2)}`);
}

function produtos() {
  cardapio = [
    { cd: 1, especificacao: "Cachorro Quente", preco: 4.0 },
    { cd: 2, especificacao: "X-Salada", preco: 4.5 },
    { cd: 3, especificacao: "X-Bacon", preco: 5.0 },
    { cd: 4, especificacao: "Torrada Simples", preco: 2.0 },
    { cd: 5, especificacao: "Refrigerante", preco: 1.5 },
  ];

  return cardapio;
}

function conta(a, b) {
  for (let item of a) {
    if (b[0] == item.cd) {
      return item.preco * b[1];
    }
  }
}

main();
