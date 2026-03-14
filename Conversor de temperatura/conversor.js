//Conversor de temperertura 

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){

    if(toFahrenheit.checked){
        temp =Number(textBox.value);
        temp =temp * 9/5 +32;
        result.textContent= temp.toFixed(3) + "°F";     //.toFixed podes decir cuantos numero queres despues de la coma en este caso 1

    }
    else if(toCelsius.checked){
        temp =Number( textBox.value);
        temp =(temp-32) * (5/9);
        result.textContent= temp.toFixed(1) + "°C"; 
        

    }
    else{
        result.textContent = "Seleccione una unidad";
    }

}