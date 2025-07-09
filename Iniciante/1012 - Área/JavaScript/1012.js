function main() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.split(" ").map(Number);
  const PI = 3.14159;
  const rightTriangleArea = calculateRightTriangleArea(a, c);
  const circleArea = calculateCircleArea(PI, c);
  const trapezoidArea = calculateTrapezoidArea(a, b, c);
  const squareArea = calculateSquareArea(b);
  const rectangleArea = calculateRectangleArea(a, b);
  console.log(`TRIANGULO: ${rightTriangleArea.toFixed(3)}`);
  console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`);
  console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
  console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
}

function calculateRightTriangleArea(base, height) {
  return (base * height) / 2;
}

function calculateCircleArea(pi, radius) {
  return pi * Math.pow(radius, 2);
}

function calculateTrapezoidArea(baseA, baseB, height) {
  return (baseA + baseB) * (height / 2);
}

function calculateSquareArea(side) {
  return Math.pow(side, 2);
}

function calculateRectangleArea(sideA, sideB) {
  return sideA * sideB;
}

main();
