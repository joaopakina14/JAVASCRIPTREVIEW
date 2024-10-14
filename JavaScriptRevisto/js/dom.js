//Para conseguirmos dar movimento aos elementos do DOM precisamos de:
//Selecionar
//Manipular

//getElementById
//getElementsByTagName
//getElementsByClassName

//EX1 DOM
console.log("EX1 DOM")
const image = document.getElementById('redbull');
const heading =document.getElementById('heading');
console.log();
console.log(heading);

//EX2 DOM
// Seleciona todos os elementos com a class "done" e guarda-os em doneTodos
let doneTodos = document.querySelectorAll('.done');

// Seleciona a checkbox e guarda na variável checkbox
let checkbox = document.querySelector('input[type="checkbox"]');

// Exibe as variáveis no console
console.log(doneTodos);
console.log(checkbox);
 