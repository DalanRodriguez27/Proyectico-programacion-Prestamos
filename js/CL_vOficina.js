import CL_mPrestamos from "./CL_mPrestamos.js";
import CL_vPrestamos from "./CL_vPrestamos.js";

export default class CL_vOficina{
    constructor(){
        this.controlador = null;
        this.montoFinal = document.getElementById("montoFinal");
        this.cantidadClientesPorDosMeses = document.getElementById("cantidadClientesPorDosMeses");
        this.clienteMenorPrestamo = document.getElementById("clienteMenorPrestamo");
        this.vPrestamos = new CL_vPrestamos();
        this.vPrestamos.btnProcesar.onclick = () => this.controlador.procesarPrestamo();
    }

    procesarPrestamo(){
        this.mPrestamos = new CL_mPrestamos({
            nombre: this.vPrestamos.nombre,
            codigoPrestamo: this.vPrestamos.codigoPrestamo,
            monto: this.vPrestamos.monto,
            cantidadMeses: this.vPrestamos.cantidadMeses
        })
    }

    reporteOficina(montoFinal, cantidadClientesPorDosMeses, clienteMenorPrestamo){
        this.montoFinal.innerHTML = montoFinal;
        this.cantidadClientesPorDosMeses.innerHTML = cantidadClientesPorDosMeses;
        this.clienteMenorPrestamo.innerHTML = clienteMenorPrestamo;
        this.vPrestamo.inNombreCliente.value = "";
        this.vPrestamo.inCodigoPrestamo.value = "";
        this.vPrestamo.inMonto.value = "";
        this.vPrestamo.inCantidadMeses.value = "";

    }
}