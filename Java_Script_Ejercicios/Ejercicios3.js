// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array
// • devuelva el array final con el resultado de cada una de las llamadas al callback.

// ----------------------------------------------------------------------------------------------------------------




function map(array,callback) {
    let Newarray = [];
    for (let i = 0;i <array.length;i++){
        Newarray.push/(callback(array[i]));
    }
    return Newarray;
}

const ingreso = prompt("ingrese numeros separados por comas");
const  numbers = ingreso.split(",").map(num => parseInt(num.trim()));
const double = map(numbers,num => num * 2);
alert("Numeros duplicados" + double.join(","));
alert("Numeros ingresados" + numbers.join(","));
console.log("Numeros duplicados" + double.join(","));
console.log("Numeros ingresados" + numbers.join(","));



function agregar(numero){
    return "Ests son los" + numero;
};

function procesar (unArray,callback){let numerosTelefonos = [];
for (let i = 0; i<unArray.length; i++){
    numerosTelefonos.push(callback,unArray)
} return numerosTelefonos;
};


let resultados = (unArray, callback) => [callback(unArray)];

// function resultados (unArray, callback){
//     return callback + unArray
// }

alert (resultados(["1", "100", "200"], procesar));