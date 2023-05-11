const displayValorBefore = document.getElementById('valor-before');
const displayValorCurrent = document.getElementById('valor-current');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display( displayValorBefore , displayValorCurrent );

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () =>  display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () =>  display.computar(boton.value));
});