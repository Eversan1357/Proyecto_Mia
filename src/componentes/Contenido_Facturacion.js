import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Facturacion.css'

class Contenido_Facturacion extends React.Component {
    render() {
        return (
            <div id="facturacion_div">
                <div id='facturacion_divruta'>
                    <img id="facturacion_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="facturacion_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="facturacion_iconos" src='/img/icono_facturacion.png' alt='' />
                    <text id='facturacion_textrutas'>Facturación/</text>
                    <text id='facturacion_textrutas'>Generar Factura</text>
                </div>
                <div id='facturacion_form'>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" for="exampleInputEmail1" class="form-label">Fecha Inicial:</label>
                        <input id="facturacion_inputs" class="date" type="date" ></input>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" for="exampleInputEmail1" class="form-label">Fecha Final:</label>
                        <input id="facturacion_inputs" class="date" type="date" ></input>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" for="exampleInputEmail1" class="form-label">Institución Educativa:</label>
                        <select class="form-select">
                            <option>Institución Educativa*:</option>
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" for="exampleInputEmail1" class="form-label">Sede:</label>
                        <select class="form-select">
                            <option>Sede*:</option>
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" for="exampleInputEmail1" class="form-label">Zona:</label>
                        <select class="form-select">
                            <option>Zona*:</option>
                        </select>
                    </div>
                    <div id="facturacion_divinfomacion">
                        <label id="facturacion_inputstext" for="exampleInputEmail1" class="form-label">Numero Ración:</label>
                        <input id="facturacion_inputs" type="text" class="form-control" placeholder="Numero Ración"></input>
                    </div>
                </div>
                <div id="busc">
                    <button type="submit" class="btn btn-danger">Buscar</button>
                </div>
                <table id="tablains" class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Zona</th>
                            <th scope="col">Almuerzo</th>
                            <th scope="col">A.M</th>
                            <th scope="col">P.M</th>
                            <th scope="col">$Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Zona1</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">Zona2</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">Zona3</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">Zona4</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">Zona5</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">Indigenas</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Contenido_Facturacion;