let c1 = parseInt(prompt());
let q1 = parseInt(prompt());
let v1 = parseFloat(prompt());
let c2 = parseInt(prompt());
let q2 = parseInt(prompt());
let v2 = parseFloat(prompt());
total = (q1 * v1) + (q2 * v2);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);