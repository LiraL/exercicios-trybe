/*Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
Por exemplo:*/

//Definir o numero de linhas e colunas 

let asteriscos = '';

for (let linha = 1; linha <= 5; linha += 1) {
    asteriscos += '*';
    console.log(asteriscos)
}