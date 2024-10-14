

let myLuckyNumber = 14;
let myName = "João";
console.log("(Ex1 da pag 13:) O meu nome é " + myName + " e o meu número preferido é o " + myLuckyNumber);

const message = "  TASTE THE RAINBOW!  ";
let whisper = message.toLowerCase().trim();

console.log("Ex2 da pag24: " + whisper);


const word = "skateboard";
let facialHair = word.slice(5, 10).replace("o", "e");
console.log("Ex3 da pag26: " + facialHair);

// let firstName = prompt ("Qual o seu primeiro nome?");
// let lastName = prompt ("Qual o seu último nome?");
// alert("Olá " + firstName + " " + lastName);
// console.log("ex4 da pag32: Prompt do: Olá " + firstName + " "+lastName)

// let diaSemana = prompt("Que dia é hoje? ");
// diaSemana=diaSemana.trim().toUpperCase();
// switch(diaSemana){
//     case "SEXTA":
//         alert("SEXTOUUU");
//     break;
//     default: 
//         alert ("Boa sorte");
//     break;
// }

// do{ passWord = prompt ("Insira uma pass: ");
// }while(passWord.length<6);
//     alert("Ex5 da pag36: Bem vindo " + firstName + " " + lastName)

let planetas = ['Mercúrio', 'Vénus', 'Terra', 'Mart', 'Jupiter', 'Saturno', 'Urano', 'Neptuno', 'Plutão'];
planetas[3] = "Marte";
console.log(planetas);
planetas.pop();
console.log(planetas);
planetas.unshift("Estrelinha");
console.log("EX6 DA PAG40: " + planetas);

const airPlaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco'],
];

console.log(airPlaneSeats[3][1] = "João");
console.log("EX7 DA PAG44 console.log(airPlaneSeats[3][1]='joao'); dá nisto: " + airPlaneSeats)


console.log("EX8 DA PAG47 - Objetos")
let product = { name: "Tide", inStock: true, Price: 1.99, cores: ['vermelho', 'azul', 'verde'] }

console.log(product.Price)
console.log(product.cores[2])
product.price = 2.55
console.log(product.price)

console.log("EX9 DA PAG 52 - CICLOS FOR")

for (let i = 0; i < 6; i++) {
    console.log(i + " Da ba dee da ba daa")
}

for (let i = 25; i > 0; i = i - 5) {
    console.log(i)
}

console.log("EX10 DA PAG55 - ARRAYS MUITO IMPORTANTE")

const people = ['Scooby', 'Velma', ' Daphne', 'Shaggy', 'Fred'];
for (let i = 0; i < people.length; i++) {
    people[i] = people[i].toUpperCase();

    console.log(people);
}

console.log("EX11 DA PAG59 - FOR OF E FOR IN - Está comentado");
// let compras=['Nestum', 'cerelac', 'CornFlakes', 'Muesli'];
// let codigo = "fim";
// compras=prompt("Insira mais produtos à sua lista de compras:");
// while(compras!=codigo){
//     compras=prompt("Insira mais produtos à sua lista de compras:")
// }


console.log("ex12 da pag62 - Functions")
function printHeart() {
    alert("<3");
}

console.log("ex13 da pag66 - Functions com argumentos")
function rant(message) {
    message = "JS é Dificil";
    let upperMessage = message.toUpperCase();
    for (let i = 0; i < 3; i++)
        console.log(upperMessage);
}

console.log("EX14 DA PAG69 - FUNCTIONS COM VÁRIOS ARGUMENTOS")
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Yay são olhos de cobra!");

    } else {
        console.log("não são olhos de cobra");
    }
}

console.log("EX15 DA PAG83 - ARRAYS - FUNÇÃO DENTRO DE OBJETOS - METODO.MAP");
const fullNames = [{ first: 'Albus', last: 'Dumbledore' },
                    { first: 'Harry', last: 'Potter' },
                    { first: 'Hermione', last: 'Granger' },
                    { first: 'Ron', last: 'Weasley' },
                    { first: 'Rubeus', last: 'Hagrid' },
                    { first: 'Minerva', last: 'McGonagall' },
                    { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (p){
return p.first;});

console.log(firstNames)

console.log("EX16 DA PAG85 - ARROW FUNCTIONS");
const greet = (nome) => {
    return `Olá, ${nome}!`;
};

// Exemplo de uso:
console.log(greet('João'));  // Output: Olá, João!

console.log("EX17 DA PAG91 - ")
const validUserNames = (usernames) => {
    return usernames.filter(username => username.length < 10);
};

// Exemplo de uso:
const nomesDeUsuarios = ['user123', 'superlongusername', 'cat', 'harrypotter', 'ron', 'hermione'];
const nomesValidos = validUserNames(nomesDeUsuarios);

console.log(nomesValidos);  // Output: ['user123', 'cat', 'ron']

console.log("EX18 DA PAG94 - METODO EVERY(EXISTE O SOME AINDA)")

const allEvens = (numeros) => {
    return numeros.every(num => num % 2 === 0);
};

// Exemplo de uso:
const numeros1 = [2, 4, 6, 8];
const numeros2 = [1, 2, 3, 4];

console.log(allEvens(numeros1));  // Output: true
console.log(allEvens(numeros2));  // Output: false
