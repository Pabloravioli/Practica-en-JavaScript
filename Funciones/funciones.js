//Funciones una seccion reusable de codigo declaras el codigo una vez y lo puedes usar cuando quieras llama a la funcion para ejecutar ese codigo

/*
function happyBirthday(username, age){

    console.log("Feliz cumpleaños a ti");
    console.log("Feliz cumpleaños a ti");
    console.log(`Feliz cumpleaños a ${username}`);
    console.log("Feliz cumpleaños a ti");
    console.log(`Tu tienes ${age} años`);

}
happyBirthday();
happyBirthday();
happyBirthday();


happyBirthday("Pablo", 25);
happyBirthday("Spongebob",30);
happyBirthday("Patrick",37);
*/

function add(x,y){

    let result = x + y;
    return result



}
function subtract(x,y){

    return x - y;

}

function multiply (x,y){

    return x*y;
}

function divide (x,y){

    return x / y;
}


function isEven(number){

    if(number % 2 === 0){
        return true;

    }
    else{
        return false;
    }

}

//EJEMPLO TERNARIO
function ternario (numero){

    return numero % 2 === 0 ? true : false;
}


function isValidEmail(email){

    if(email.includes("@")){

        return true;

    }
    else {

        return false;
    }
}

let answer = add(2,3);
console.log(answer);

console.log(subtract(10,2));

console.log(multiply(2,6));

console.log(divide(4,2));

console.log(isEven(4));

console.log(ternario(2));

console.log(isValidEmail("Brofake.com"));