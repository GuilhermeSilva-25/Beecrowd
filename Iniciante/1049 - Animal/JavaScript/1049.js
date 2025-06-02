function main() {
  var input = require("fs").readFileSync("/dev/stdin", "utf8");
  var lines = input.split("\n");

  const a = lines[0];
  const b = lines[1];
  const c = lines[2];

  console.log(animal(a, b, c));
}

function animal(a, b, c) {
  if (a == "vertebrado" && b == "ave" && c == "carnivoro") {
    return "aguia";
  } else if (a == "vertebrado" && b == "ave" && c == "onivoro") {
    return "pomba";
  } else if (a == "vertebrado" && b == "mamifero" && c == "onivoro") {
    return "homem";
  } else if (a == "vertebrado" && b == "mamifero" && c == "herbivoro") {
    return "vaca";
  } else if (a == "invertebrado" && b == "inseto" && c == "hematofago") {
    return "pulga";
  } else if (a == "invertebrado" && b == "inseto" && c == "herbivoro") {
    return "lagarta";
  } else if (a == "invertebrado" && b == "anelideo" && c == "hematofago") {
    return "sanguessuga";
  } else if (a == "invertebrado" && b == "anelideo" && c == "onivoro") {
    return "minhoca";
  }
}

main();
