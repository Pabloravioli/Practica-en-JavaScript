// la type conversion cambia el tipo de dato de la variable a otro como strings, numeros, booleans

let age = window.prompt("Cuantos años tienes");
age = Number(age);
age += 1;
console.log(age, typeof age);

//Otro ejemplo

let x;
let y;
let z;


x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);