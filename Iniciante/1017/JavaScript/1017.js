let tempoViagem = parseInt(prompt());
let velocidadeMedia = parseInt(prompt());
let distanciaPercorrida = velocidadeMedia * tempoViagem;
let litrosNecessarios = distanciaPercorrida / 12;
console.log(litrosNecessarios.toFixed(3));
