//Programa del contador

const decrementar = document.getElementById("decrementarBoton");
const resetear = document.getElementById("resetBoton");
const incrementar = document.getElementById("incrementarBoton");
const contador = document.getElementById("contadorLabel");

let count = 0;

incrementar.onclick = function(){


    count++;
    contador.textContent = count;
}

decrementar.onclick = function(){


    count--;
    contador.textContent = count;
}

resetear.onclick = function(){


    count = 0;
    contador.textContent = count;
}