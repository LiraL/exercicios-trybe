let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let identity = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3},
}
console.log('A jogadora ' + identity['name'] + ' ' + identity['lastName'] + ' tem ' + identity['age'] + ' de idade.');

identity ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogador ' + identity['name'] + ' ' + identity['lastName'] + ' foi eleita a melhot do mundo por 6 vezes ' + identity['bestInTheWorld']);

console.log('A jogadora também possui ' + medals['golden'] + ' de ouro ' + medals['silver'] + ' de prata.'); 0