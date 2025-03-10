const x1 = parseFloat(prompt());
const y1 = parseFloat(prompt());
const x2 = parseFloat(prompt());
const y2 = parseFloat(prompt());
const distancia = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
console.log(`${distancia.toFixed(4)}`);
