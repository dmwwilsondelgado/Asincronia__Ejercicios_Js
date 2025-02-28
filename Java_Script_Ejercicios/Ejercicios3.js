// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.


// function map(array,callback) {
//     // let array = [1,2,3,4,5,6,7,8,9,10];
//     let array = [];
//     let resultadoCallback = [];
//     for (let i = 0; i < array.length; i++) {
//         resultadoCallback.push(callback(array[i]));
//     }
//     return resultadoCallback;
// }
// function callback(elemento){
//     return elemento * 2;
// }

// let resutadosFinales = map(array,callback);
// console.log(resutadosFinales);



// function ingresoArray(numero){
//     let array = [];
//     array.push(numero);
//     return array;
// }

function agregarHttp (url){
    return "http://" + url;
};


function procesar (unArray,callback){
    let sitiosWeb = [];
for (let i = 0; i<unArray.length; i ++){
    sitiosWeb.push(callback,unArray)
} return sitiosWeb;
};

let sitioWebCompleto = (unArray, callback) => [callback(unArray)];

/* function sitioWebCompleto (unArray, callback){
    return callback + unArray
} */


console.log (sitioWebCompleto(["www.yahoo.com", "www.google.com", "www.git.com"],agregarHttp));