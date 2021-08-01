let valorDeCompra = 10_000;
let Imposto = 1.2; //1.2 mesmo que 20%
let custoPorunidade = valorDeCompra * Imposto;

let valorDeVenda = 20_000;
let lucroPorUnidade = valorDeVenda - custoPorunidade;

let uniadadesVendidas = -100;
let lucroTotalLiquido = lucroPorUnidade * uniadadesVendidas;

if (lucroTotalLiquido >= 0) {
    console.log("Lucro por unidade: " + lucroPorUnidade)
    console.log("Total de unidades vendidas: " + uniadadesVendidas)
    console.log("Lucro Total: " + lucroTotalLiquido)
}
else {
    console.log("[ERRO] Valor de entada não pode ser menor que 0")
}