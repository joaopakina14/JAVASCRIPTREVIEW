//TYPEOF
console.log(".........................................TIPOS DE DADOS................................");
console.log(typeof(16));
//na consola aparece Number
console.log(typeof("Aula JS"));
//na consola aparece String
console.log(typeof (true, false));
//Na consola aparece que é Boolean
console.log(typeof cesae);
//Na consola aparece undefined

console.log("................................RESULTADOS DE CONTAS SIMPLES................................");
//CONTAS SIMPLES
console.log(4+3);
console.log(4-3);
console.log(4*3);
console.log(4/3);
console.log(4%3);
//Contas simples na consola

let myLuckyNumber = 16;
let myName ="João";
//na consola colocamos só o nome da variável para puxar o valor/conteúdo

//PROVA QUE VARIAVEL PODE SE MUDAR OS VALORES
let myProgress = '50%';
console.log(typeof myProgress);
myProgress = '75%';
console.log (myProgress);
//Variavel inicialmente apresenta 50% e depois 75%

let myNumber = 14;
console.log(myNumber);
myNumber++;
console.log(myNumber);
myNumber--;
console.log(myNumber);
//Igual troca de valores depois de variavel trocada.

const myNameConst ="João";
//No caso const não se pode mudar os valores
//Se o quiser fazer tem de ser numa variavel nova... pois essa const nunca mudará

const age =65;
console.log(age);
//Se fizer isto vai dar erro - age++; Pois é uma const.


console.log("....................................INDEX DE STRINGS...........................................");
let nameOfCourse = "FrontEnd Developer";
nameOfCourse[3];
console.log(nameOfCourse + " na posição 3 tem um: " + nameOfCourse[3])//FrontEnd Developer na posição 3 tem um: n
console.log(nameOfCourse + " tem " + nameOfCourse.length + " carateres.");//FrontEnd Developer tem 18 carateres.
console.log("............MÉTODOS DE STRINGS (TRIM, TOUPPERCASE, ETC)")
console.log(nameOfCourse.toUpperCase().trim()); //FRONTEND DEVELOPER


//Concatenar variáveis , usando o MAIS +
let firstName = 'João';
let lastName = 'Pimentel';
console.log("....................................CONCATENAÇÃO DE DUAS VARIÁVEIS........................")
console.log(firstName + ' ' + lastName);

console.log(".........................A CONSTANTE (ANIMAL) USOU O [7] PARA CHEGAR AO T.................")

//Uma string nao passa de um array de carateres... 
const animal ="hippopotamus";
console.log(animal);
console.log(animal[7]);


//metodo $ e `
let stringTemplate = "String Template";
console.log(""+stringTemplate.toUpperCase() + " é uma solução para não ter de concatenar com o $ e os acentos para trás `")
let myStringTemplate = `A soma de 4 com 6 é ${4+6}`;
console.log(myStringTemplate = `A soma de 4 com 6 é ${4+6}`);

// let nomeIdade=prompt("Qual o seu nome?");
// let idadeNome=prompt("Qual a sua idade?");
// let ultimaLetra = nomeIdade[nomeIdade.length -1];
// console.log("linha 80 - TRABALHEI SOZINHO AS CONDICIONAIS........................")
// if (idadeNome>30 && ultimaLetra==="o"){
//     alert("Boa tarde Senhor " + nomeIdade);
// }if(idadeNome>30 && ultimaLetra==="a"){
//     alert("Boa tarde Senhora " + nomeIdade);
// }if(idadeNome<=30 && ultimaLetra==="o"){
//     alert("Boa tarde Menino " + nomeIdade);
// }if(idadeNome<=30 && ultimaLetra==="a"){
//     alert("Boa tarde menina " + nomeIdade);
// }else{
//     alert("Olá " + nomeIdade)
// }

console.log("...............INICIO DA MATÉRIA DOS ARRAYS....................");
let daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
console.log(daysOfWeek);
console.log("A posição [2] tem a "+daysOfWeek[2]); 
console.log("(A semana tem.length )" + daysOfWeek.length + "( comando length)");
console.log ("REASSIGNAÇÃO DE VALORES NO ARRAY")
daysOfWeek[2] = 'Domingo';
console.log(daysOfWeek);
console.log(".........................PARA MODIFICAR OS ARRAYS TEMOS:........................")
console.log("PUSH-ADICIONA AO FIM, POP: REMOVE DO FIM, SHIFT: REMOVE DO INICIO E P UNSHIFT ADICIONA AO INICIO")
console.log("............................NESTED ARRAYS SÃO ARRAYS DENTRO DE ARRAYS....................");

const colors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['green', 'olive'],
    ['blue', 'navyblue'],
    ['purple', 'orchid'],
];
console.log("Na const colors e com (colors [3][0] temos: " + colors [3][0]);

const morningWeeks = [['Quarta de Manha', 'Quarta de tarde'], ['quinta de manha', 'quinta de tarde']];
console.log("na const morningWeeks e com (morningWeeks [1][1] temos: " + morningWeeks [1][1]);

//ARRAYS : OUTROS MÉTODOS
console.log(".....................................ARRAYS: OUTROS MÉTODOS......................................")
const array1 =['a','b', 'c'];
const array2 = ['f', 'g','h'];
const array3 = array1.concat(array2);
console.log('const array3 = array1.concat(array2); dá em: '+ array3);
console.log("console.log(array3.includes('c')); dá em: "+array3.includes('c'));
console.log(array3.indexOf)


console.log("...................COMEÇA AQUI A MATERIA DE ESTRUTURA DE DADOS(OBJECT LITERALS)...................")

const course = {name: 'FrontEnd Developer', hours:900, modules: ['mySql', 'Eweb', 'DC']}
console.log(course.name)
console.log(course.modules[1])
console.log(course.hours)
console.log(course)

console.log("...................COMBINAÇOES DE ARRAYS E OBJETOS...................")

const student ={
    firstName: "João",
    lastName: "Pimentel",
    strengths: ['music', 'art'],
    exams: {
        midterm:92,
        final: 88
    }
}
console.log(student)
console.log(student.firstName.toUpperCase().trim())

console.log("...................INICIO DOS LOOPS...................")
console.log("...................LOOPS - FOR LOOP...................")
console.log("for(let i =1; i<11; i++){console.log(i);}")
for(let i =1; i<11; i++){
    console.log(i);
}

console.log("Imprimir os números pares até 20")
for(let i=0; i<=20; i=i+2){
    console.log(i)
}

console.log("...................LOOPS - ITERAR ARRAYS COM O VARIAVEL.LENGTH...................")

let daysOfWeeks = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
for(let i=0; i <daysOfWeeks.length; i++){
    console.log(i, daysOfWeeks[i]);
}

console.log("................... LOOPS - WHILE ...(está comentado)......")
// let mySecretCode = 'joao';
// let userCode = prompt('Digite o código secreto!');

// while(userCode!=mySecretCode){
//     userCode = prompt('Digite o código secreto!');

// }
// alert("Finalmente");

console.log("...................WHILES...................")
let num=0
while(num<10){
    console.log(num);
    num++
}
console.log(".........FALAR COM A SARA..........FOR OF e FOR IN...................");
console.log("For of interage com o valor das propriedades. ")
const people = ["Scooby", 'Velma', 'Daphne', 'Shaggy', 'Fred'];
for (let element of people){
    console.log(element);
}
console.log("o for...in interage com o nome das propriedades")
for(let element in people){
    console.log(element);
}

console.log("....................FUNÇÕES.....................")
console.log("É PRECISO DOIS PASSOS PARA ESCREVER UMA FUNÇAO: 1. DEFINIR UMA FUNÇAO E 2. EXECUTAR UMA FUNÇAO")

// function helloWorld(){
//     let hello = 'Hello World';
//     alert(hello);
// }
// helloWorld();

console.log(".......................FUNÇÕES COM VÁRIOS ARGUMENTOS.................")

function greet (firstName, lastName){
    console.log(`Hey, ${firstName} ${lastName[0]}.`);
    
}
greet('João', 'Pimentel');

function repeat(msg, numTimes){
    for(i=0; i<numTimes; i++){
        console.log(i, msg);
    }
}

console.log("....................FUNÇÕES - RETURN..................")
function sumConsole (num1, num2){
    console.log(num1+num2);
}

function sumReturn (num1, num2){
    return(num1+num2);
}

console.log("............................. PODEMOS ADICIONAR FUNÇÕES COMO PROPRIEDADES DE UM OBJETO...................")

const myMath = {
    sum: function (x,y){
    return x + y},
    multiply: function (x, y){
        return x*y},
    divide: function (x,y){
        return x/y}, 
    subtract: function (x,y){
        return x-y}      
}

// console.log("....................A key THIS.......................")
console.log("...........SERIE DE METODOS..................");
console.log("forEach");
console.log("map");
console.log("filter");
console.log("find");
console.log("some&every");
console.log("reduce");

console.log("O FOREACH SERVE PARA CHAMAR A FUNÇÃO PARA CADA ELEMENTO DO ARRAY");

const nums = [9,8,7,6,5,4,3,2,1];
nums.forEach(function (n){
    console.log(n*n)
});

nums.forEach(function (el){
    if (el%2===0){
        console.log(el)
    }
});

console.log("METODOS DE ARRAYS : MAP")
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t){
    return t.toUpperCase();
})
console.log(texts);
console.log(texts.length);
console.log(caps);



