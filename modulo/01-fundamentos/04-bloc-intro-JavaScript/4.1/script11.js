let salario = 1000.00;
let dinheiro = salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

if (salario <= 155694) {
    let recolhimento1 = salario * (1-0.08);
    console.log("Após o recolhimento você receberá: " + recolhimento1)
}
else if (salario <= 259492) {
    let recolhimento2 = salario * (1-0.09); 
    console.log("Após o recolhimento você receberá: " + recolhimento2)
}
else if (salario <= 518982) {
    let recolhimento3 = salario * (1-0.11); 
    console.log("Após o recolhimento você receberáv: " + recolhimento3)
}
else {
    console.log("Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88")
}

