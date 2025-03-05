// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

let arreglo = [10, 15, 20, 30, 40];
const some = function (arreglo,callback){
    for (let i = 0; i < arreglo.length; i++){
        if (callback(arreglo[i])){
            return alert(true+ "hay elementos en las Filas" );
        }
        return alert(false+ "No hay elementos en las Filas");
    }
}



function multiplo5(num) {
    return num % 2 == 0;
}

alert(some(arreglo,multiplo5) + "    mostremos el array"+ arreglo);
