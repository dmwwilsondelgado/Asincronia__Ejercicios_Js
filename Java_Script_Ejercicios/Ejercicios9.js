// ¿Cuál es el resultado del código a continuación?


let i =0 ; 


setTimeout(() =>alert(i),100);


// asumimos que el tioempoi de esta funcion es  > 100ms

for (let j = 0; j < 10000; j++) {
    i++;

}
alert(" el resultado mostrado siuempre sera i  que vale 10000000 ya que el for solo bloquea "
    +"y el setTimeout solo ejecutara despues que el bucle inicie por los 100"
)

