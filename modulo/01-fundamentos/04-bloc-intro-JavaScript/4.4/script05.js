/*Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:*/

let infoMargarida = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrencia: 'Sim',
  };
let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrencia: 'Sim',
  };

  console.log(infoMargarida.personagem + ' - ' + infoPatinhas.personagem);
  console.log(infoMargarida.origem + ' - ' + infoPatinhas.origem);
  console.log(infoMargarida.nota + ' - ' + infoPatinhas.nota);
  console.log(infoMargarida.recorrencia + ' - ' + infoPatinhas.recorrencia
  );
  