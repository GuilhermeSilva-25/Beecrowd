function main() {
  let I = 1;
  let JInicial = 7;

  while (I <= 9) {
    let contador = 1;
    let J = JInicial;
    while (contador <= 3) {
      console.log(`I=${I} J=${J}`);
      J--;
      contador++;
    }
    I += 2;
    JInicial += 2;
    contador = 1;
  }
}

main();
