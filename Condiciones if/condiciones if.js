
/* ejemplo 1

let age = 25;

if(age>=18){

    console.log("Eres lo suficientemente mayor para entrar a este sitio");

}
else{
    console.log("No puedes entrar eres menor de edad");
}
*/



/* ejemplo 2
let time = 9;

if (time < 12){

    console.log("Good Morning");

}
else{
    console.log("Good afternoon");
}
*/



/* ejemplo 3 CON BOOLEANOS
let isStudent = true;

if (isStudent){

    console.log("Tu eres un estudiante");

}
else{

    console.log("Tu no eres un estudiante");


}
*/


/* ejemplo 4
let age = 17;
let hasLicense = false;

if (age >= 16){

    console.log("Eres lo suficiente mayor para manejar");

    if(hasLicense){
         console.log("Tu tienes tu licencia");

    }
    else{
        console.log ("Tu no tienes licencia aun");
    }

}
else{

    console.log("Tu no eres lo suficiente mayor para tener una licencia para manejar");

}

*/

/* EJEMPLO 5 anidados
let age = 100;

if (age >= 100){

    console.log("Tu eres DEMASIADO mayor para entrar a este sitio ");
}
else if( age == 0){
    console.log("Tu no puedes entrar por que recien naciste");
}
else if(age >= 18){
    console.log("Tu eres lo suficiente mayor para entrar a este sitio");
}
else if(age < 0){
    console.log("Tu edad no puede ser menos de 0");

}

else{

    console.log("Tienes que ser mayor de 18 para entrar a este sitio");
}
*/


const miTexto = document.getElementById("miTexto");
const miEntrega = document.getElementById("miEntrega");
const resultado = document.getElementById("resultado");

let age;

miEntrega.onclick = function(){

    age = miTexto.value;
    age = Number(age);

    if (age == ""){

        resultado.textContent = "Tiene que ingresar una edad";

    }
    else if (age >= 100){

       
        resultado.textContent = "Tu eres DEMASIADO mayor para entrar a este sitio ";
    }
    else if( age == 0){
       
        resultado.textContent = "Tu no puedes entrar por que recien naciste";
    }
    else if(age >= 18){
        resultado.textContent = "Tu eres lo suficiente mayor para entrar a este sitio";
    }
    else if(age < 0){
        resultado.textContent = "Tu edad no puede ser menos de 0";

    }
    else if(age < 18){
        resultado.textContent = "Tienes que ser mayor de 18 para entrar a este sitio";
    }
   
    else{

        resultado.textContent = "Tienes que ingresar una edad";
    }


}
