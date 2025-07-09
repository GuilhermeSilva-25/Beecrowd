import * as fs from "fs";

function main(): void {
  const input: string = fs.readFileSync("/dev/stdin", "utf8");
  const [a, b, c] = input.split(" ").map(Number);
  const PI: number = 3.14159;
  const rightTriangleArea: number = calculateRightTriangleArea(a, c);
  const circleArea: number = calculateCircleArea(PI, c);
  const trapezoidArea: number = calculateTrapezoidArea(a, b, c);
  const squareArea: number = calculateSquareArea(b);
  const rectangleArea: number = calculateRectangleArea(a, b);
  console.log(`TRIANGULO: ${rightTriangleArea.toFixed(3)}`);
  console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
  console.log(`TRAPEZIO: ${trapezoidArea.toFixed(3)}`);
  console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
  console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);
}

function calculateRightTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

function calculateCircleArea(pi: number, radius: number): number {
  return pi * Math.pow(radius, 2);
}

function calculateTrapezoidArea(baseA: number, baseB: number, height: number): number {
  return (baseA + baseB) * (height / 2);
}

function calculateSquareArea(side: number): number {
  return Math.pow(side, 2);
}

function calculateRectangleArea(sideA: number, sideB: number): number {
  return sideA * sideB;
}

main();
