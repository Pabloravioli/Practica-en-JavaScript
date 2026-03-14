// STRING SLICING crea subSTRINGS desde una porcion de otro STRING 
// string.slice(start,end)     end no esta incluido

const fullName = "Pablo1 Espinosa4 Servando";

let firstName = fullName.slice(0,5);

let lastName = fullName.slice(7,fullName.indexOf("4"));

let nombreLimpio = fullName.slice(0,)


console.log(firstName);

console.log(lastName);