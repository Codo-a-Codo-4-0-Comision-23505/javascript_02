function meses() {
    var mes_nacimiento = prompt("Ingrese numero de Mes")
    switch (mes_nacimiento) {
        case "1":
            alert("Esto es enero")
            break;
        case "2":
            alert("Esto es febrero")
            break;
        case "3":
            alert("Esto es marzo")
            break;
        case "4":
            alert("Esto es abril")
            break;
        case 5:
            alert("Esto es enero")
            break;
        case 6:
            alert("Esto es enero")
            break;
        case 7:
            alert("Esto es enero")
            break;
        case 8:
            alert("Esto es enero")
            break;
        default:
            break;
    }
}

function mayoriaEdad() {
    var anio_de_nacimiento = prompt("Ingresa tu año de nacimiento")

    var anio_actual = 2023

    var edad = anio_actual - anio_de_nacimiento

    // Tengo que saber si la persona es mayor de 18 años.

    if (edad >= 18) {
        alert("Bienvenido")
    } else {
        alert("No podes, sos menor de edad...")
    }
}

function notas() {
    var notas = prompt("Ingresa nota obtenida")

    if (notas <= 3) {
        alert("Chau... a recursar...")
    } else if (notas >= 7) {
        alert("Promocionaste") // notas de  7 para arriba
    } else {
        alert("Aprobaste, vas a final") // notas entre 4 y 7
    }
}

// Esta funcion suma DOS numeros y devuelve resultado..
function sumar( valor1 , valor2 ) {
    // quizas podamos hacer un chequeo si ambos valores son numeros..

    var resultado = valor1 + valor2

    return resultado
}

// esta funcion tiene un parametro con valor por defecto
function multiplicar( valor1, valor2 = 1) {
    return valor1 * valor2
}