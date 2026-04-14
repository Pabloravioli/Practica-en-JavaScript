//Programa para generar contraseña

const tamañoDeContraseña = document.getElementById("tamañoDeContraseña");
const incluirMinusculas = document.getElementById("incluirMinusculas");
const incluirMayusculas = document.getElementById("incluirMayusculas");
const incluirNumeros = document.getElementById("incluirNumeros");
const incluirSimbolos = document.getElementById("incluirSimbolos");
const contraseñaCreada = document.getElementById("contraseñaCreada");
const fortalezaDeContraseña = document.getElementById("fortalezaDeContraseña");
const mensaje2 = document.getElementById("mensaje2");
 

function generarContraseña(){

    let resultado = "";
    let caracteresPermitidos = "";
    let ningunCheckboxMarcado = "";

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

        if(caracteresPermitidos==""){
            mensaje2.textContent = "Marque al menos una casilla";
        }
        else{
            mensaje2.textContent = "";

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

    let tieneMinusculas = /[a-z]/.test(resultado);  //El .test se encarga de buscar el patron indicado por ejemplo entre /[a-z]/ en resultado sino encuentra false y si lo encuentra True
    let tieneMayusculas = /[A-Z]/.test(resultado);
    let tieneNumeros = /[0-9]/.test(resultado);
    let tieneSimbolos =  /[^a-zA-Z0-9]/.test(resultado);

    let mensajeDeNivel;

    let nivel = 0;

    if(tieneMinusculas == true){
        nivel += 1;
    }
    if(tieneMayusculas == true){
        nivel +=1;
    }
    if(tieneNumeros == true){
        nivel += 1;
    }
    if(tieneSimbolos == true){
        nivel +=1;
    }

    if(resultado.length < 6 ){

        fortalezaDeContraseña.textContent = "Contraseña Debil";

    }
    else if(resultado.length < 10 && nivel >=1 ){
        fortalezaDeContraseña.textContent = "Contraseña Normal";
    }
    else if(resultado.length >= 10 && nivel >= 1){
        fortalezaDeContraseña.textContent = "Contraseña Fuerte";
    }
    else{
        fortalezaDeContraseña.textContent = "";
    }
 
}

copiarContraseña.onclick = function(){

    let mensajeDeCopia;
    let contraseña = contraseñaCreada.textContent;
    if(!contraseña){
        mensajeDeCopia = "Tienes que crear una contraseña primero";
        mensaje.textContent = mensajeDeCopia;

    }
    else{
        navigator.clipboard.writeText(contraseña);
        mensaje.textContent = "Copiado!";
        setTimeout(() => {
            mensaje.textContent = "";
            }, 2000);
    }
    
}

