/*Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeroImpar = 0;

for (ind = 0; ind < numbers.length; ind += 1) {
   
    if (numbers[ind] % 2 == 1) {
    numeroImpar ++; 
    console.log("Total de números impares: " + numeroImpar);
    }
}

