function main() {
  const word = require("fs").readFileSync("/dev/stdin", "utf8").trim();
  const message = word.length >= 10 ? "palavrao" : "palavrinha";
  console.log(message);
}

main();
