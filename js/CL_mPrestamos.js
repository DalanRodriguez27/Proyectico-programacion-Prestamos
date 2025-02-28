export default class CL_mPrestamos{
    constructor({nombreCliente, codigoPrestamo, monto, cantidadMeses}){
        this.nombreCliente = nombreCliente;
        this.codigoPrestamo = codigoPrestamo;
        this.monto = monto;
        this.cantidadMeses = cantidadMeses;
    }

    set nombreCliente(nombreCliente){
        return this._nombreCliente = nombreCliente;
    }

    get nombreCliente(){
        return this._nombreCliente;
    }

    set codigoPrestamo(codigoPrestamo){
        return this._codigoPrestamo = codigoPrestamo;
    }

    get codigoPrestamo(){
        return this._codigoPrestamo;
    }

    set monto(monto){
        return this._monto = monto;
    }

    get monto(){
        return this._monto;
    }

    set cantidadMeses(cantidadMeses){
        return this._cantidadMeses = cantidadMeses;
    }

    get cantidadMeses(){
        return this._cantidadMeses;
    }
}