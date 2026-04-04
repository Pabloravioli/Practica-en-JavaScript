//Programa para generar contraseña

const tamañoDeContraseña = document.getElementById("tamañoDeContraseña");
const incluirMinusculas = document.getElementById("incluirMinusculas");
const incluirMayusculas = document.getElementById("incluirMayusculas");
const incluirNumeros = document.getElementById("incluirNumeros");
const incluirSimbolos = document.getElementById("incluirSimbolos");
const contraseñaCreada = document.getElementById("contraseñaCreada");

 

function generarContraseña(){

    let resultado = "";
    let caracteresPermitidos = "";

    const tamaño = tamañoDeContraseña.value;

    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "1234567890";
    const simbolos ="!@#$%^&*()-_=+";


    if (tamaño == ""){

        resultado = "Ingrese al menos una opcion" ;
        contraseñaCreada.textContent = resultado;
    }
   
    else{

        const tamañoNumero = Number(tamañoDeContraseña.value);

        caracteresPermitidos += incluirMinusculas.checked ? minusculas: "";
        caracteresPermitidos += incluirMayusculas.checked ? mayusculas: "";
        caracteresPermitidos += incluirNumeros.checked? numeros: "";
        caracteresPermitidos += incluirSimbolos.checked? simbolos: "";
        
        if(tamañoNumero < 4 || tamañoNumero > 20 ){

            resultado = "Longitud invalida" ;
            contraseñaCreada.textContent = resultado;

        }
        else{

            for (let i=0;i<tamañoNumero;i++){

                const index = Math.floor(Math.random()*caracteresPermitidos.length);
                resultado += caracteresPermitidos[index];
                }

            contraseñaCreada.textContent = resultado;

        }

        
       
        
    }


    
   

 
}