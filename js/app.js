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

var myPerson = new Object();

myPerson.colorOjos = "Marrones"
myPerson.colorPelo = "Negro"
myPerson.numeroIdentidad = 111111111


var socialNetwork = new Object();

socialNetwork.instagram = "@nombreUsuario"
socialNetwork.linkedin = "@UsuarioNombre"


myPerson.mySocialNetworks = socialNetwork;

var myAuto = {
    marca: "Peugeot",
    modelo: "206",
    color: "negro"
}


console.log(myAuto.marca);
console.log(myAuto.modelo);
console.log(myAuto.color);


var alumno = {
    nombre: "Juan",
    apellido: "Britez",
    edad: 30,
    comision: "23505",
    notas: [ 1, 6, 10, 4, 3 ],

    promedioNotas: function () {
        var promedio = 0;

        for (let index = 0; index < notas.length; index++) {
            promedio += notas[index]; // notas[0]
                                        // notas[1]
                                        // notas[2]
        }
        return promedio/notas.length; // la sumatoria de las notas dividido el total...
    }
}

console.log(alumno.promedioNotas())

console.log(alumno.nombre)

var myText = document.body.innerText

console.log(myText)

var myButton = document.getElementById("001");

myButton.onclick = () => alert("Apretaron el boton")