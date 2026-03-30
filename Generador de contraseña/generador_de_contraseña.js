//Programa para generar contraseña

const tamañoDeContraseña = document.getElementById("tamañoDeContraseña");
const incluirMinusculas = document.getElementById("incluirMinusculas");
const incluirMayusculas = document.getElementById("inclurMayusculas");
const incluirNumeros = document.getElementById("inclurNumeros");
const incluirSimbolos = document.getElementById("inclurSimbolos");
const contraseñaCreada = document.getElementById("contraseñaCreada");

 

function generarContraseña(){

    let resultado = "";
    let caracteresPermitidos = "";

    const tamaño = Number(tamañoDeContraseña.value);

    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    //const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   // const numeros = "1234567890";
   // const simbolos ="! @ # $ % ^ & * ( ) - _ = +";


    if (tamaño < 4){

        resultado = "Longitud invalida" ;
        contraseñaCreada.textContent = resultado;
    }
    
    else{

        caracteresPermitidos += incluirMinusculas.checked ? minusculas: "";
        


        
        console.log(caracteresPermitidos);
        for (let i=0;i<tamaño;i++){
            const index = Math.floor(Math.random()*caracteresPermitidos.length);
            resultado += caracteresPermitidos[index];
            
    
    
        }

        contraseñaCreada.textContent = resultado;
    }


    
   

 
}