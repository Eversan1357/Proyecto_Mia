import React from "react";
import './Contenido_Buscar_Estudiante.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import estudianteService from '../services/estudiante.service';

const Contenido_Buscar_Estudiante = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    useEffect(() => {
        estudianteService.getAll()
            .then(response => {
                console.log('printing the estudiantes data', response.data);
                setEstudiantes(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }, []);

    return (
        <div id="buscar_div">
            <div id='buscar_divruta'>
                <img id="buscar_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="buscar_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="buscar_iconos" src='/img/icono_estudiantes.png' alt='' />
                <text id='buscar_textrutas'>Estudiantes/</text>
                <text id='buscar_textrutas'>Buscar Estudiantes</text>
            </div>
            <div id="form_buscar">
                <div>
                    <text>Departamento*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div>
                    <text>Municipio*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div>
                    <text>Institución:*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div>
                    <text>Sede:*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Selecione una Opción</option>
                    </select>
                </div>
                <div>
                    <text>Nombre Completo:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Nombre Completo">
                    </input>
                </div>
                <div>
                    <text>Apellido Completo:*</text>
                    <input type="text" id="ins" class="form-control" placeholder="Apellido Completo">
                    </input>
                </div>
                <div>
                    <text>Tipo Documento:*</text>
                    <select id='seleccionar' class="form-select">
                        <option>Targeta de Identidad</option>
                        <option>Cedúla</option>
                    </select>
                </div>
                <div>
                    <text>Numero Documento:*</text>
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
                {estudiantes.map(estudiante => (
                    <tbody>
                        <tr key={estudiante.idEstudiante}>
                            <td>{estudiante.unTipoDocumento.nombre}</td>
                            <td>{estudiante.numeroDocumento}</td>
                            <td>{estudiante.nombre1}</td>
                            <td>{estudiante.apellido1}</td>
                            <td>{estudiante.fechaNacimiento}</td>
                            <td>{estudiante.unaInstitucion.nombre}</td>
                            <td>{estudiante.unaSede.nombre}</td>
                            <td>{estudiante.grado}</td>
                            <td>{estudiante.unTipoDocumento.nombre}</td>
                            <td>{estudiante.unTipoDocumento.nombre}</td>
                            <td>{estudiante.unTipoDocumento.nombre}</td>
                            <td>{estudiante.unTipoDocumento.nombre}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}
export default Contenido_Buscar_Estudiante;