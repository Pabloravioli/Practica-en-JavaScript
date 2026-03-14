//while loop repiten algunos codigos WHILE otras condiciones SEAN TRUE
// while Do prmero hace luego pregunta
// WHILE SIEMPRE FUNCIONA CUANDO LA CONDICION ES TRUE
let looggedIn = false;
let username;
let password;

while(!looggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username ==="myUsername" && password === "myPassword"){

        console.log("Estas logeado1");
        looggedIn = true;

    }
    else{

        console.log("No estas logeado!");
    }




}