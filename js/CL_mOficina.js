export default class CL_mOficina{
    constructor(montoCaja, montoPorComision){
        this.montoCaja = montoCaja;
        this.montoPorComision = montoPorComision;
        this.cntClientes2Meses = 0;
        this.menorPrestamo = 10000000000000;
        this.nombreClienteMenorPrestamo = "";
        this.acMontoPrestamo = 0.0;

    }

    set montoCaja(montoCaja) {
        return this._montoCaja = +montoCaja;
    }

    get montoCaja() {
        return this._montoCaja;
    }

    set montoPorComision(montoPorComision) {
        return this._montoPorComision = +montoPorComision;
    }

    get montoPorComision() {
        return this._montoPorComision;
    }

    procesarPrestamo(prestamos) {
        this.acMontoPrestamo += Number(prestamos.monto);

        if(prestamos.cantidadMeses == 2) {
            this.cntClientes2Meses++;
        }

        if(prestamos.monto < this.menorPrestamo) {
            this.menorPrestamo = prestamos.monto;
            this.nombreClienteMenorPrestamo = prestamos.nombreCliente;
        }

        


    }

    montoFinal(){
        return this._montoCaja - this.acMontoPrestamo;
    }

    cantidad2Meses(){
        return this.cntClientes2Meses;
    }

    clienteMenorPrestamo(){
        return this.nombreClienteMenorPrestamo;
    }



}