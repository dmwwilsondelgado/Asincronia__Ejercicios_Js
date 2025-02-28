// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
//                 comenzando desde desde y terminando con hasta.
//                 Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
//                 • Usando setInterval.
//                 • Usando setTimeout anidado
// ________________________________________________________________________________________________
// resultados = prompt(parseInt("ingrese un numero "));
// resultados = imprimirNumeros0();
// ahora llamamamos al afuncion 
// imprimirNumeros0(1,20);

// let desde = parent(prompt("ingrese un numero "));
// let hasta = parent(prompt("ingrese un numero "));
// function imprimirNumeros2(desde,hasta){
//     let numero = desde;
//     setTimeout(function(){
//         console.log(numero);
//         if(numero < hasta){
//             imprimirNumeros2(numero + 1,hasta);
//         }
//     },1000);
// }



alert('Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo, comenzando desde desde y terminando con hasta. Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas: • Usando setInterval. • Usando setTimeout anidado');

let desde = parseInt(prompt("ingrese un numero para ingresar "));
let hasta = parseInt(prompt("ingrese un numero para continuar "));

// validamos si es un numero en la ejecuccion de la funcion
if (isNaN(desde)&&isNaN(hasta)) {
    console.log("Los valores ingresados son corretos");
}else{
    console.log("Los valores ingresados son incorrectos");
}

function imprimirNumeros(desde,hasta){
  let numero = desde; 
  let intervalo = setInterval(()=> {
    console.log(numero);
    if (numero >= hasta) {
        clearInterval(intervalo);
    }
    numero++;
  },300); 
  setTimeout(function(){
    console.log(numero);
      if(numero < hasta){
          imprimirNumeros(numero + 1,hasta); 
      }10
    },1000);
  
}


imprimirNumeros(desde,hasta);



// function imprimirNumeros0(desde,hasta){
//     let numero = desde; //incializamos una variable en el valor desde 
//     let intervalo = setInterval(()=> {
//         console.log(numero); //imprimimos el valor de la variable numero
//         if(numero >= hasta){ //si el valor de la variable numero es igual a hasta
//             clearInterval(intervalo); //detenemos el intervalo
//         }
//         numero++; //incrementamos el valor de la variable numero
//     },400);
// }