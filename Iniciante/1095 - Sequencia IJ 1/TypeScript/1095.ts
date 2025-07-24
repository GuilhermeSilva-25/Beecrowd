function main(): void {
  for (let i: number = 1, j = 60; j >= 0; i += 3, j -= 5) {
    console.log(`I=${i} J=${j}`);
  }
}

main();
