//meses()
//notas()

sumar( 5, 123) // lo que retorna la funcion no lo captura nadie
//console.log(sumar( 1212, 13)) // no usamos variables, usamos directo el valor
var miResultado = sumar( -25, -1) // lo captura una variable
//console.log(miResultado)
sumar( 5, "a")

//console.log(multiplicar(23,2))
//console.log(multiplicar(23))


console.log(potenciar( 4, 3 ))

/*var mypotenciar = function ( valor, veces) {
    return valor ** veces
}*/

var mypotenciar = ( valor, veces) => valor ** veces;

console.log(mypotenciar(4, 3))

// Tiene un parametro que es una funcion...
function ejecutarFuncion( myFunction, valor1, valor2){
    return myFunction(valor1,valor2)
}


console.log(ejecutarFuncion( mypotenciar, 4,3) )


console.log(ejecutarFuncion( ( valor, veces) => valor ** veces, 4,3) )


var myMoto = new Object()

myMoto.marca = "Honda"
myMoto.modelo = "zr1"
myMoto.cilindrada = "250"
myMoto.anio = "2020"
myMoto.color = "Amarillo furioso"
myMoto.tipo = "naked"


console.log(myMoto.marca);