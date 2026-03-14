// Method chaining es llamar un metodo despues de otro en una sola linea de codigo

// sin metodo Chaining

let username = window.prompt("Ingresa tu nombre de usuario: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLocaleLowerCase();
username = letter + extraChars;

console.log(username);

//con metodo Chaining

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();

console.log(username);