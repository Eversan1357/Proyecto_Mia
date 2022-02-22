import React from "react";
import './Contenido_Facturacion.css'

class Contenido_Facturacion extends React.Component {
    render() {
        return (
            <div id="div">
                <div id='divruta'>
                    <div id='divrutas'>
                        <img id="iconos" src='/img/icono_inicio.png' alt='' />
                        <text id='textrutas'>Inicio/</text>
                        <img id="iconos" src='/img/icono_facturacion.png' alt='' />
                        <text id='textrutas'>Facturación/</text>
                        <text id='textrutas'>Generar Facturación</text>
                    </div>
                </div>
                <hr />


                <div id='divfac'>
                    <div>
                        <label for="exampleInputEmail1" class="form-label">Fecha Registro</label>
                        <input class="date" type="date" ></input>
                    </div>
                    <div>
                        <label for="exampleInputEmail1" class="form-label">Fecha Registro</label>
                        <input class="date" type="date" ></input>
                    </div>
                    <div>
                        <select id="mun" class="form-select">
                            <option>Grado*</option>
                        </select>
                    </div>
                    <div>
                        <select id="mun" class="form-select">
                            <option>Grado*</option>
                        </select>
                    </div>
                    <div>
                        <select id="mun" class="form-select">
                            <option>Grado*</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" id="ins" class="form-control" placeholder="Dirección*">
                        </input>
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