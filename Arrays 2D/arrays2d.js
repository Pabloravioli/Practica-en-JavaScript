// Los ARRAYS2D almacenan datos en filas y columnas 
// Se usan para juegos, spreadsheets, or representing images

const matrix =[ [1,2,3], 
                [4,5,6], 
                [7,8,9],
                ["*","0","#"]];





matrix[0][0] = "x";   //Como asignar valores en la posicion columna y fila
matrix[0][1] = "o";
matrix[0][2] = "x";

matrix[1][0] = "o";
matrix[1][1] = "x";
matrix[1][2] = "o";

matrix[2][0] = "x";
matrix[2][1] = "o";
matrix[2][2] = "x";


for(let row of matrix){
    const rowString = row.join(``); //Muestra cada fila como un solo elemento
    console.log(row);
}