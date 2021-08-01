//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = 0;

for (ind = 1; ind < numbers.length; ind += 1) {
    if (numbers[ind] < menor) {
        menor = numbers[ind]; 
    }
}
console.log(menor);