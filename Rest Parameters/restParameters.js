// REST parametro (...rest) hace lo opuesto a SPREAD osea combina elementos separados en un ARRAY

function openFridge(...foods){ //Aca donde voy almacenando los elmentos separados (food) en el ARRAY
    console.log(...foods); // y ACA uso SPREAD para volver a separarlos
}

function getFood(...foods){ //Los elementos suelto los convierto en ARRAY

    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1,food2,food3,food4,food5);


const foods = getFood(food1, food2, food3, food4, food5); //A estos elementos sueltos los vuelvo en un ARRAY en la funcion getFood

console.log(foods);



function sum(...numbers){  //Este ejemplo sumamos el ARRAY creado en ...numbers

    let result = 0;
    for(let number of numbers){
        result += number;

    }
    return result;



}
const total = sum (1,2,3,4,5);

console.log(`Your total is $${total}`);


function getAverage(...numbers1){  //Este ejemplo obtenemos el promedio del ARRAY creado en ...numbers1

    let result = 0;
    for(let number of numbers1){
        result += number;

    }
    return result/numbers1.length;



}

const average = getAverage(75,100,85,90,50); // En este caso tambien se puede combinar STRINGS 

console.log(average);

function combineString(...strings){

    return strings.join(" ");
}

const fullname = combineString ("Pablo", "Espinosa", "Servando");

console.log(fullname);