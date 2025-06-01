function main() {
  let input = require("fs").readFileSync("/dev/stdin", "utf8");
  let lines = input.split('\n');

  const notas = lines[0].split(" ").map((item) => parseFloat(item, 10));
  const media = calculoMedia(notas);
  console.log(`Media: ${media.toFixed(1)}`);
  let situacao = avaliacaoInicial(media);

  if (situacao !== "Aluno em exame.") {
    console.log(situacao);
  } else {
    console.log(situacao);
    let notaExame = parseFloat(lines[1], 10);
    exame(media, notaExame);
  }
}

function calculoMedia(notas) {
  return (notas[0] * 2 + notas[1] * 3 + notas[2] * 4 + notas[3]) / 10;
}

function avaliacaoInicial(media) {
  if (media >= 7) {
    return "Aluno aprovado.";
  } else if (media < 5) {
    return "Aluno reprovado.";
  } else {
    return "Aluno em exame.";
  }
}

function exame(media, notaExame) {
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
  let novaMedia = (media + notaExame) / 2;
  if (novaMedia >= 5) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }
  console.log(`Media final: ${novaMedia.toFixed(1)}`);
}

main();
