// PROGRAMA DE GENERADOR NUMEROS RANDOMS

const dado = document.getElementById("miBoton");
const miRespuesta = document.getElementById("miRespuesta");

const min = 1;
const max = 6;
let numeroRandom;




dado.onclick = function(){

    numeroRandom = Math.floor(Math.random() * max) + min;
    miRespuesta.textContent = numeroRandom;


}