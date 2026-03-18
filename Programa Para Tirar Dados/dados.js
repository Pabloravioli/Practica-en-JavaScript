//Programa para tirar dados




function tirarDados(){

    const cantidadDeDados = document.getElementById("cantidadDeDados").value;
    const dadoResultado = document.getElementById("dadoResultado");
    const dadoImagen = document.getElementById("dadoImagen");
    const valores = [];
    const imagenes = [];

    for(let i = 0; i < cantidadDeDados; i++){

        const valor =Math.floor( Math.random()*6)+1;
       valores.push(valor);
       imagenes.push(`<img src ="imagenes/${valor}.svg" alt = "Dado ${valor}">`);
    }
    
    dadoResultado.textContent = `Dado: ${valores.join(", ")}`;
    dadoImagen.innerHTML = imagenes.join("");



   
    


}


