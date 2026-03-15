// ARRAYS es una variable que es una estructura que puede contener mas de un 1 valor

let fruits = ["apple", "orange", "banana"];

for (let i=0; i < fruits.length; i++){

    console.log(fruits[i]);
} //Recorrer un ARRAY CON RANGO


for(let fruit of fruits){
    console.log(fruit);  //RECORRER EL ARRAY SIN RANGE
}

fruits.push("coconut");   // AGREGA un elemento a lo ULTIMO al ARRAY
fruits.pop("coconut");    // QUITA el ULTIMO elemento del ARRAY
fruits.unshift("mango");  // AGREGA un elemento al PRINCIPIO del ARRAY
fruits.shift("");         // QUITA el PRIMER elemento deL ARRAY

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple"); // Indica la POSICION del elemento 

console.log(numOfFruits); //DICE EL LARGO DEL ARRAY



console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.sort(); //ORDENA ALFABETICAMENTE LOS ELEMENTOS 
fruits.sort().reverse(); //ORDENA DE MANERA INVERTIDA 