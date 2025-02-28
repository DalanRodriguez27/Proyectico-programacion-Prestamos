import CL_Controlador from "./CL_Controlador.js";
import CL_mOficina from "./CL_mOficina.js";
import CL_vOficina from "./CL_vOficina.js";

export default class CL_Principal{
    constructor(){
        let vista = new CL_vOficina();
        let montoCaja = prompt("Ingrese el monto de la caja: "),
        montoPorComision = prompt("Ingrese el monto de la comision: ");
        let modelo = new CL_mOficina(montoCaja, montoPorComision);
        let controlador = new CL_Controlador(modelo, vista);
        vista.controlador = controlador;
    }
}