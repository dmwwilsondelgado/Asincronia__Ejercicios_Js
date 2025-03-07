// 10. La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
//                 promesas.
//                 La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
//                 después de ms milisegundos, para que podamos agregarle. then, así:

function delay(ms) {
    return new Promise (function (resolve) {
        setTimeout(resolve,ms);// Facil sencillo
    })
}
delay(3000).then(() => alert("Se ejecutara despues de tres  segundoss    w aooooo"));