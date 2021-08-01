/*let myName = "Lucas";
const birthCity = "São Paulo";
let birthYear = 28;


console.log(myName);
console.log(birthCity);
console.log(birthYear);

*//*

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge); 
*//*
let base = 5;
let altura = 8; 
let area = base * altura;
let perimetro = area/2;

console.log(area);
console.log(perimetro);
*//*
let Joana = 31;

if (Joana >= 80 && Joana < 100) {
    console.log("Parabéns você foi aprovada(o)")
} 
else if (Joana >= 60 && Joana < 80) {
    console.log("Você está na nossa lista de espera")
} 
else {
    console.log("Você foi reprovada(o)")
}
*/
let situacao = "regular";

switch (situacao) {
  case "suficiente":
    console.log("Aprovada");
    break;

  case "regular":
    console.log("Espera");
    break;

  case "insuficiente":
    console.log("Reprovada");
    break;

  default:
    console.log("não se aplica")
}


