// juego Adivinador de numero

let max = 10;
let min = 1;

const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const pista = document.getElementById("pista");
const respuestaCorrecta = document.getElementById("respuestaCorrecta");

let numeroUsuario;
let numeroSecreto;

numeroSecreto = Math.floor(Math.random()*(max-min+1)) + min;


mySubmit.onclick = function(){
    
    numeroUsuario = myText.value;
    if(numeroUsuario == ""){
        pista.textContent = "Ingrese un numero!"

    }
    else{
        numeroUsuario = Number(numeroUsuario);



        if(numeroUsuario > numeroSecreto){

            pista.textContent = "Muy Alto";

        }
        else if (numeroUsuario < numeroSecreto) {

            pista.textContent = "Muy Bajo";
                

        }
        else if(numeroUsuario !== numeroSecreto) {

            pista.textContent="Tiene que ser un numero!"


        }
        else{

            pista.textContent = "CORRECTO ADIVINASTE EL NUMERO"
        }
    }
}     

    




