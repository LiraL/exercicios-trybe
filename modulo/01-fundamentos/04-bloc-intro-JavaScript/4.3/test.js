/*Utilizando o array abaixo, percorra-o somando todos os valores. 
Caso o valor final seja maior que 15, imprima-o. Caso seja igual 
ou menor que 15, imprima a mensagem: "valor menor que 16":*/

let fruits = [3, 4, 10, 1, 12];

let result = 0;

for (ind = 0; ind < fruits.length; ind += 1) {
    result = result + fruits[ind];
}
    
    if (result > 15) {
        console.log(15)
    }
    else {
        console.log("valor menor que 16")
    }



