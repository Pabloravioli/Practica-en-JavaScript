//Spread operator (...)
//Permite separar arrays o strings en elementos separados


let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);
//Por ejemplo si en este caso queremos extraer el elemento mayor no vamos a poder por que devolvera un elemento que es una lista pero con Spread (...) permite extraer el numero mayor

let username = "Pablo Espinosa";
let letters = [...username].join("-");

console.log(letters);

//En este caso al STRING lo devuelve en formato array con cada caracter como un elemento en el array
// Y luego lo volvemos a unir con .join


let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery","potatoes"];

let foods =[...fruits, ...vegetables, "eggs", "milk"];


console.log(foods);

//En este caso se combino dos arrays y tambien se le agrego "EGGS" Y "MILK"