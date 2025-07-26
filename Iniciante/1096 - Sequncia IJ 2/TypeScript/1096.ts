function main(): void {
  for (let i: number = 1; i <= 9; i += 2) {
    for (let j: number = 7; j>= 5; j--) {
      console.log(`I=${i} J=${j}`);
    }
  }
}

main();