// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined


let arreglo = [10, 11, 23, 55, 90];

const findIndex =  (arreglo,callback) =>{
    for (let i = 1; i < Array.length; i++){
        if (callback(arreglo[i])){
            return alert(true);
        }else{
            return alert(undefined);
        }
    }
}


function multiplos_de_3(num){
    return num % 3 == 0;
}
alert(findIndex(arreglo,multiplos_de_3));

// alert(findIndex+"----"+ (arreglo,multiplos_de_3) + "-----");


