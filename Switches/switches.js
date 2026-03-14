// SWITCH = Puede ser un reemplazo eficiente de las condiciones ELSE y IF

/*let day = "perro";

switch(day){
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miercoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sabado");
        break;
    case 7:
        console.log("Es domingo");
        break;
    default:
        console.log(`${day} no es un dia`);


}
*/

let testScore = 61;
let letterGrade;

switch(true){

    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >=70:
        letterGrade = "C"
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
    
}

console.log(letterGrade);