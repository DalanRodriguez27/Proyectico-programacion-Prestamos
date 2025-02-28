export default class CL_vPrestamos{
    constructor(){
        this.inNombreCliente = document.getElementById("inNombreCliente_input");
        this.inCodigoPrestamo = document.getElementById("inCodigoPrestamo_input");
        this.inMonto = document.getElementById("inMonto_input");
        this.inCantidadMeses = document.getElementById("inCantidadMeses_input");
        this.btnProcesar = document.getElementById("btnProcesar");  
        
    }

    get nombre(){
        return this.inNombreCliente.value;
    }    
    get codigoPrestamo(){
        return this.inCodigoPrestamo.value;
    }

    get monto(){
        return +this.inMonto.value;
    }

    get cantidadMeses(){
        return +this.inCantidadMeses.value;
    }
}