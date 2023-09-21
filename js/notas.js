var notas = prompt("Ingresa nota obtenida")

if (notas <= 3) {
    alert("Chau... a recursar...")
} else if (notas >= 7) {
    alert("Promocionaste") // notas de  7 para arriba
} else {
    alert("Aprobaste, vas a final") // notas entre 4 y 7
}