// Operador ternario es una version corta del if o else, ayuda a asignar variables basado en su condicion
// asi se escribe       condicion ? codigoIfTrue : codigoIfFalse;
//Acontinuacion ejemplos


/*let age = 17;
let message = age >= 18? "Tu eres un adulto" : "Tu eres menor";

console.log(message);
*/

/*let time = 16;
let greeting = time < 12? "Buenos Dias!" : "Buenas tardes!";
console.log(greeting);
*/

/*let isStudent = false;
let message = isStudent ? "Tu eres un estudiante":"Tu no eres un estudiante";
console.log(message);
*/

let purchaseAmount = 150;
let discount = purchaseAmount >= 100? 10 : 0;
console.log(`Tu total es $${purchaseAmount-purchaseAmount * (discount/100)}`);



