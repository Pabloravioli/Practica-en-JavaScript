//String metodos = permite manipual y trabajar con textos (STRINGS)

let userName = " Bro Code ";


console.log(userName.charAt(2));   // Permite acceder a CHARACTER basado en su posicion


console.log(userName.indexOf("o")); //Permite acceder a la posicion del CHARACTER basado en su CHARACTER

console.log(userName.length); //Permite saber el largo del STRING

console.log(userName.trim()); //Elimina los espacios del STRING

console.log(userName.toUpperCase()); //Convierte en MAYUSCULA EL STRING

console.log(userName.toLowerCase()); // Convierte en minuscula al STRING

console.log(userName.repeat(3)); // Repetir la cantidad de veces el STRING

let result = userName.startsWith(" "); //ESTO DEVUELVE UN BOOLEAN TRUE

if(result){
    console.log("Tu nombre de usuario no puede empezar con ` ` ");

}
else{
    console.log(userName);
}


let result1 = userName.endsWith(" "); //ESO DEVUELVE UN BOOLEAN EN TRUE
if(result1){
    console.log("Tu nombre de usuario no puede terminar con ` ` ");

}
else{
    console.log(userName);


}



let result2 = userName.includes(" "); // Esto devuelve un BOOLEAN EN TRUE EN CASO DE QUE INCLUYA LO QUE ESTA INDICANDO

if(result2){
    console.log("Tu nombre no puede incluir ` `");

}
else{

    console.log(userName);
}



let phoneNumber = "123-456-7890"; //Reemplaza el - con el / asi con cualquier CHARACTER

phoneNumber = phoneNumber.replaceAll("-" , "/");

console.log(phoneNumber);


phoneNumber = phoneNumber.padStart(15,"0"); // DICE cuanto de largo tiene que tener el STRING en este caso 15 e indica rellenar con 0 alprincipío del STRING


console.log(phoneNumber);

let phoneNumber1 = "123-456-7890";
phoneNumber1 = phoneNumber1.padEnd(15,"0"); //DICE cuanto de largo tiene que tener el STRING en este caso 15 pero rellena alfinal con 0
console.log(phoneNumber1); 