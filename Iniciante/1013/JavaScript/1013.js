const a = parseInt(prompt())
const b = parseInt(prompt())
const c = parseInt(prompt())
const maior_ab = (a + b + Math.abs(a - b)) / 2
const maiorFinal = (maior_ab + c + Math.abs(maior_ab - c)) / 2
console.log(`${maiorFinal} eh o maior`)