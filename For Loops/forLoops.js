// For loop repeti algun codigo ciertas cantidad limitada de veces
// el contador, condicion del contador o la cantidad de veces, de a cuanto tiene que iterar


for(let i = 0; i<=10;  i++){  //Incrementador
    console.log(i);

}

for (let b = 10; b>0;b--){  //Decrementar
    console.log(b);
}


for(let x = 0; x<=10;x++){  //El continue SALTEA esa iteracion osea el 5
    
    if(x == 5){
        continue;

    }
    else{
        console.log(x);
    }

}


for(let y = 0; y<=10; y++){   //Hace que cCORTE LA ITERACION CUANDO PASE POR EL 5 (5 EXCLUIDO)

    if(y == 5){
        break;
    }
    else{
        console.log(y);
    }
}