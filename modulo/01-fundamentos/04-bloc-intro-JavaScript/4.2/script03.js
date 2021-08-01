//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let som = 0;

for (ind = 0; ind < numbers.length; ind += 1) {
    som = som + numbers[ind];
}

console.log(som / 2);