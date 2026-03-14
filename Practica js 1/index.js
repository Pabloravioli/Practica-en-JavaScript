//console.log('Hola Mundo');
//console.log('NDEAAAH');

//window.alert('Hola Mundo')


// esto es un comentario

//VARIABLES

document.getElementById('estoEsH1').textContent ='arbol';
document.getElementById('estoEsP').textContent= 'ndeaaah';

let age = 25;
let price = 10.99;
let gpa = 2.1;
let nombre = "pablo"

console.log(`Tu edad es ${age} años`);
console.log(`El precios es ${price}`);
console.log(`Tu gpa es ${gpa}`);
console.log(nombre);

console.log(typeof gpa);

console.log(typeof price);

console.log(typeof gpa);

console.log(typeof nombre);


let online = true;
let offline = false;
console.log(`Tu nombre es rupert: ${offline}`);
console.log(`Tu nombre es Pablo: ${online}`);


document.getElementById("p1").textContent = `Tu nombre es ${nombre}`;
document.getElementById("p2").textContent = `Tu edad es ${age}`;
document.getElementById("p3").textContent = `Tu eres estudiante ${online}`;

//OPERADORES ARITMETICOS

let estudiantes = 30;

estudiantes1 = estudiantes + 1;
estudiantes2 = estudiantes - 1;
estudiantes3 = estudiantes * 2;
estudiantes4 = estudiantes / 2;
estudiantes5 = estudiantes % 2;
estudiantes6 = estudiantes ** 2;


estudiantes += 1;
estudiantes -= 1;
estudiantes *= 2;
estudiantes /= 2;
//estudiantes %=2;
//estudiantes **=2;

//INCREMENTADORES Y DECREMENTADORES

estudiantes --;
estudiantes ++;

console.log(estudiantes2);

console.log(estudiantes);



//IMPORTANTE PROCEDENCIA DE OPERATOR

 
//1 PARENTESIS
//2 EXPONENTS
//3 MUTIPLICACION DIVISION Y MODULO
//4 SUMA Y RESTA 

//ESTE ES EL ORDEN PARA RESOLVER PROBLEMAS MATEMATICAS DE IZQUIERDA A DERECHA


let resultado = 12%5+8/2;

console.log(resultado)


//Como aceptar user input

// 1. MANERA FACIL = Window prompt
//2. Profesional way = html textbox

//1.
let userName;

userName = window.prompt("Cual es tu nombre de usuario?");

console.log(userName);


//2. 

document.getElementById("miRespuesta").onclick = function(){

    userName = document.getElementById("miTexto").value;
    document.getElementById("miH1").textContent = `Hola ${userName}`
}