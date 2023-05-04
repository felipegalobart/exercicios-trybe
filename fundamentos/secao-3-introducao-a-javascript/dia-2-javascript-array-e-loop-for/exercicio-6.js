let numbers = [6, 8, 4, 18, 70, 8, 100, 2, 34, 28];
let impares = [];
let qtdImpares = 0;

for (let index = 0; index < numbers.length; index += 1)  {
  if (numbers[index] % 2 !== 0) {
    impares.push(numbers[index])
    qtdImpares += 1;
  }
}
console.log(impares)

if (qtdImpares > 0) {
  console.log("Quantidade de números ímpares: ", qtdImpares)
}else{
  console.log("Nenhum valor ímpar encontrado!");
}