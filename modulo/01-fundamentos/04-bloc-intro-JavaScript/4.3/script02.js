/*Para o segundo exercício, faça o mesmo que antes, 
mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:*/

//Definir o numero de linhas e colunas 


let asteriscos = '';

for (let linha = 1; linha <= 5; linha += 1) {
    asteriscos += '*';
    console.log(asteriscos);
}