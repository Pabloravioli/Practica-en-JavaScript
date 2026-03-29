//Programa para generar contraseña

const tamañoDeContraseña = document.getElementById("tamañoDeContraseña");
const incluirMinusculas = document.getElementById("incluirMinusculas");
const incluirMayusculas = document.getElementById("inclurMayusculas");
const incluirNumeros = document.getElementById("inclurNumeros");
const incluirSimbolos = document.getElementById("inclurSimbolos");
const contraseñaCreada = document.getElementById("contraseñaCreada");

 

function generarContraseña(){

    let resultado;

    const tamaño = Number(tamañoDeContraseña.value);

    if (tamaño < 4){

        resultado = "Longitud invalida" ;
        contraseñaCreada.textContent = resultado;
    }
   

 
}