import React from "react";
import './Contenido_Buscar_Estudiante.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Contenido_Buscar_Estudiante = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/estudiante')
            .then((response) => {
                return response.json()
            })
            .then((estudiante) => {
                setEstudiantes(estudiante)
            })
    }, [])

    return (
        <div id="buscar_div">
            <div id='buscar_divruta'>
                <img id="buscar_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="buscar_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="buscar_iconos" src='/img/icono_estudiantes.png' alt='' />
                <text id='buscar_textrutas'>Estudiantes/</text>
                <text id='buscar_textrutas'>Buscar Estudiantes</text>
            </div>
            <div id="buscar_form">
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext" >Departamento*</text>
                    <select class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Municipio*</text>
                    <select class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Institución:*</text>
                    <select class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Sede:*</text>
                    <select class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Nombre Completo:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Completo">
                    </input>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Apellido Completo:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Apellido Completo">
                    </input>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Tipo Documento:*</text>
                    <select class="form-select">
                        <option>Targeta de Identidad</option>
                        <option>Cedúla</option>
                    </select>
                </div>
                <div id="buscar_divinfomacion">
                    <text id="buscar_inputstext">Numero Documento:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Numero documento">
                    </input>
                </div>
            </div>
            <div id="busc">
                <button type="submit" class="btn btn-danger">Buscar Estudiante</button>
            </div>

            <table id="tablains" class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Tipo Documento</th>
                        <th scope="col">Numero Documento</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Fecha de Nacimiento</th>
                        <th scope="col">Institución</th>
                        <th scope="col">Sede</th>
                        <th scope="col">Grado</th>
                        <th scope="col">Fecha de Registro</th>
                        <th scope="col">Tipo Beneficio</th>
                        <th scope="col">Estado Beneficio</th>
                        <th scope="col">Ver más</th>
                    </tr>
                </thead>
                {estudiantes.map(listadoestudiante => (
                    <tbody>
                        <tr key={listadoestudiante.idEstudiante}>
                            <td>{listadoestudiante.unTipoDocumento.nombre}</td>
                            <td>{listadoestudiante.numeroDocumento}</td>
                            <td>{listadoestudiante.nombre1}</td>
                            <td>{listadoestudiante.apellido1}</td>
                            <td>{listadoestudiante.fechaNacimiento}</td>
                            <td>{listadoestudiante.unaInstitucion.nombre}</td>
                            <td>{listadoestudiante.unaSede.nombre}</td>
                            <td>{listadoestudiante.grado}</td>
                            <td>{listadoestudiante.unTipoDocumento.nombre}</td>
                            <td>{listadoestudiante.unTipoDocumento.nombre}</td>
                            <td>{listadoestudiante.unTipoDocumento.nombre}</td>
                            <td>{listadoestudiante.unTipoDocumento.nombre}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}
export default Contenido_Buscar_Estudiante;