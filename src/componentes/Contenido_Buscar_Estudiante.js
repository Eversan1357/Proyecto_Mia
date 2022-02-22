import React from "react";
import './Contenido_Buscar_Estudiante.css'

class Contenido_Buscar_Estudiante extends React.Component {
    render() {
        return (
            <div id="div">
                <div id='divruta'>
                    <div id='divrutas'>
                        <img id="iconos" src='/img/icono_inicio.png' alt='' />
                        <text id='textrutas'>Inicio/</text>
                        <img id="iconos" src='/img/icono_estudiantes.png' alt='' />
                        <text id='textrutas'>Estudiante/</text>
                        <text id='textrutas'>Buscar Estudiante</text>
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
                    <text>Institución:*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id='selector'>
                    <text>Sede:*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id='selector'>
                    <text>Nombre Completo:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Completo">
                    </input>
                </div>
                <div id='selector'>
                    <text>Apellido Completo:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Apellido Completo">
                    </input>
                </div>
                <div id='selector'>
                    <text>Tipo Documento:*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Targeta de Identidad</option>
                        <option>Cedúla</option>
                    </select>
                </div>
                <div id='selector'>
                    <text>Numero Documento:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Numero documento">
                    </input>
                </div>

                <div id="busc">
                    <button type="submit" class="btn btn-danger">Buscar Estudiante</button>
                </div>

                <table id="tablains" class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Tipo Doc</th>
                            <th scope="col">Numero Documento</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Fecha de Nacimiento</th>
                            <th scope="col">Institución</th>
                            <th scope="col">Sede</th>
                            <th scope="col">Grado</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Tipo Beneficio</th>
                            <th scope="col">Estado Beneficio</th>
                            <th scope="col">Ver más</th>
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
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
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
export default Contenido_Buscar_Estudiante;