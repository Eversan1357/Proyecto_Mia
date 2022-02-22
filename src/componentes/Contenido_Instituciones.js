import React from "react";
import './Contenido_Instituciones.css'

class Contenido_Instituciones extends React.Component {
    render() {
        return (
            <div id="div">
                <div id='divruta'>
                    <div id='divrutas'>
                        <img id="iconos" src='/img/icono_inicio.png' alt='' />
                        <text id='textrutas'>Inicio/</text>
                        <img id="iconos" src='/img/icono_instituciones.png' alt='' />
                        <text id='textrutas'>Instituciones</text>
                    </div>
                </div>
                <hr />

                <div id='selector'>
                    <text>Departamento*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id='selector'>
                    <text>Municipio*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id='selector'>
                    <text>E.E(Establecimiento Educativo):*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Institución Educativa">
                    </input>
                </div>
                <div id='selector'>
                    <text>Sedes*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id="busc">
                    <button type="submit" class="btn btn-danger">Registrar Ingreso</button>
                </div>

                <table id="tablains" class="table table-hover">
                    <thead>
                        <tr>                                                                                                                                                                                                                                                                                                                                                                                                                  
                            <th scope="col">Código DANE</th>
                            <th scope="col">Nombre Institución</th>
                            <th scope="col">Rector Institución</th>
                            <th scope="col">Cantidad Sedes</th>
                            <th scope="col">Ver Institución</th>
                            <th scope="col">Ver Sedes</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
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
export default Contenido_Instituciones;