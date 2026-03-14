// .checked = propeidad que determina el estado de un checkbox html o radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){

        subResult.textContent = "Tu estas suscripto!";

    }
    else{
        subResult.textContent = "Tu no estas suscripto";
    }

    if(visaBtn.checked){

        paymentResult.textContent = "Usted esta pagando con Visa";
    }
    else if (masterCardBtn.checked){

        paymentResult.textContent = "Usted esta pagando con MasterCard";
    }

    else if(payPalBtn.checked){
        
        paymentResult.textContent = "Usted esta pagando con PayPal";

    }
    else{
        
        paymentResult.textContent = "Debe seleccionar un metodo de pago";
    }

}

