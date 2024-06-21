
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;


}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // si el numero generado ya esta en la lista de numeros sorteados

    //si ya sorteamos todos los numeros

    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se han sorteado todos los numeros posibles');

    } else {

        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del  1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciaJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero alateorio
    //iniciar numero de intentos
    condicionesIniciales();
    //desabilitar boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');



}

condicionesIniciales();



