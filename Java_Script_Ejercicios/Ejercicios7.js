// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined
let arreglo = [10, 15, 20, 30, 40];
try {
    const find = function (arreglo,balck){
        for (let i = 0; i < arreglo.length; i++){
            if (balck(arreglo[i])) {
                return alert(true);
            }else{
                return alert(undefined);
            }
        }
    }    
    function multilpo_de_10(num){
        return num % 10 == 0;
    }
    alert(find(arreglo,multilpo_de_10) );
} catch (error)
{
    console.log(error);
}
