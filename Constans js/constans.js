// const son VARIABLES que NO pueden cambiar


const pi = 3.14159;
let radius;
let circumference;

radius = Number(radius);

circumference = 2 * pi * radius;

document.getElementById("miRespuesta").onclick = function(){
    radius = document.getElementById("miTexto").value
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("miH3").textContent = circumference +" cm";





}

