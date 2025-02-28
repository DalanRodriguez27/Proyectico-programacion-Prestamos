export default class CL_Controlador {
    constructor(modelo, vista){
        this.modelo = modelo;
        this.vista = vista;
    }

    procesarPrestamo(){
        this.modelo.procesarPrestamo(this.vista.procesarPrestamo());
        this.vista.reporteOficina(this.modelo.montoFinal(), this.modelo.cantidad2Meses(), this.modelo.clienteMenorPrestamo());
    }
}