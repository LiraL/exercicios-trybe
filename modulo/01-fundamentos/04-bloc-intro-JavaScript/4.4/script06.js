/*Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function verificaPalindrome() {
    let palavra = 'arara';

    let palindromo = ['a','r','a','r','a'];
    

    let reversed = palindromo.reverse();
    reversed = reversed.join('');
    console.log(reversed === palavra);
}

verificaPalindrome();

/*let palavra = 'abacate';

for (let divisaoDapalavra in palavra) {
    divisaoDapalavra = palavra[divisaoDapalavra];
        console.log(divisaoDapalavra);
}*/