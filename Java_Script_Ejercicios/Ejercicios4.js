// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

alert('Crear una función filter que acepte un array y un callback y que: • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento • sí dicho callback devuelve true, pushea el elemento a un nuevo array • devuelva el array final con los elementos que pasaron el "filtro".');


// const filter = (array,callback) =>{
//     let Newarray = [];
//     for (let i = 0; i < array,length; i ++){
//         if (callback(array[i])) {
//             Newarray.push(array[i]);
//         }
//     } 
//     return Newarray;
// }


// function filter(array,callback){
//     return new Promise((resolve,reject) => {
//         const resultado = [];
//         array.array.forEach(element => {
//             if(callback(element)){
//                 resultado.push(element);
//             }
//         });
//         resolve(resultado);
//     });
// }


const array = [1,2,3,4,5,6,7,8,9,10];
const esPar = (numero)=>{
    return numero % 2 === 0;
}


async function filter(array,callback){
    const resultado = [];
        array.array.forEach(element =>{
        if(callback(element)){
            resultado.push(element);
        }
    });
    return resultado;
} 


async function main(){
    try {
        const resultado = await filter(array,esPar);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
main();