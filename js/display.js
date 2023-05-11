/* DISPLAY */

class Display {
    constructor( displayValorBefore , displayValorCurrent ) {
        this.displayValorCurrent = displayValorCurrent;
        this.displayValorBefore = displayValorBefore;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: '×',
            dividir: '÷',
            porcentaje: '%',
            mod: ' mod '
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = ""
        this.valorAnterior = ""
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero=== '.' &&  this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular(); 
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = '';
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorCurrent.textContent = this.valorActual;
        this.displayValorBefore.textContent = `${this.valorAnterior}${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior); 
        const valorActual = parseFloat(this.valorActual); 

        if( isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }
}