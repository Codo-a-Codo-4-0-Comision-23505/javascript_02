var anio_de_nacimiento = prompt("Ingresa tu año de nacimiento")

var anio_actual = 2023

var edad = anio_actual - anio_de_nacimiento

// Tengo que saber si la persona es mayor de 18 años.

if ( edad >= 18 ) {
    alert("Bienvenido")
} else {
    alert("No podes, sos menor de edad...")
}