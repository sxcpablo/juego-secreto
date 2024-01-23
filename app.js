let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;   
}

function condicionesIniciales() {
asignarElementoTexto('h1','Juego del número secreto');
asignarElementoTexto('p',`Escoja un número de 1 a ${numeroMaximo}`);
intentos = 1;
numeroSecreto = generarNumeroSecreto();
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste el número secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')      
    } else {
        if (numeroDeUsuario<numeroSecreto) {
        asignarElementoTexto('p', 'El número secreto es mayor');    
        } else {
            asignarElementoTexto('p', 'El número secreto es menor');
        }
    }
    intentos++;
    limpiarCaja();
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Generar nuevo número secreto
    //generarNumeroSecreto();
    //Restablecer condiciones iniciales
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p','Ya se sortearon todos los número posibles');
    } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        //si está en la lista, genera uno nuevo
        return generarNumeroSecreto();
    } else {
        //si no está en la lista lo agrega y devuelve numeroGenerado
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

condicionesIniciales();