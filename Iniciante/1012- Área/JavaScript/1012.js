function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split(" ");

  const A = parseFloat(lines[0]);
  const B = parseFloat(lines[1]);
  const C = parseFloat(lines[2]);
  const pi = 3.14159;

  console.log(`TRIANGULO: ${areaTriangulo(A, C).toFixed(3)}`);
  console.log(`CIRCULO: ${areaCirculo(pi, C).toFixed(3)}`);
  console.log(`TRAPEZIO: ${areaTrapezio(A, B, C).toFixed(3)}`);
  console.log(`QUADRADO: ${areaQuadrado(B).toFixed(3)}`);
  console.log(`RETANGULO: ${areaRetangulo(A, B).toFixed(3)}`);
}

function areaTriangulo(a, c) {
  return (a * c) / 2;
}

function areaCirculo(p, c) {
  return p * c ** 2;
}

function areaTrapezio(a, b, c) {
  return ((a + b) * c) / 2;
}

function areaQuadrado(b) {
  return b * b;
}

function areaRetangulo(a, b) {
  return a * b;
}

main();
