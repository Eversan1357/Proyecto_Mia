import React from "react";
import './Contenido_Buscar_Estudiante.css'
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

            <div id="form_buscar">
                <text>Departamento*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
                <text>Municipio*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
                <text>Institución:*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
                <text>Sede:*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
                <text>Nombre Completo:*</text>
                <input type="text" id="ins" class="form-control" placeholder="Nombre Completo">
                </input>
                <text>Apellido Completo:*</text>
                <input type="text" id="ins" class="form-control" placeholder="Apellido Completo">
                </input>
                <text>Tipo Documento:*</text>
                <select id='seleccionar' class="form-select">
                    <option>Targeta de Identidad</option>
                    <option>Cedúla</option>
                </select>
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
                        <th scope="col">Tipo Documento</th>
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
                {estudiantes.map(estudiante => (
                    <tbody>
                        <tr key={estudiante.idEstudiante}>
                            <td>{estudiante.nombre1}</td>
                            <td>{estudiante.numeroDocumento}</td>
                            <td>{estudiante.grado}</td>
                            <td>{estudiante.direccionRecidencia}</td>
                            <td>{estudiante.acudiente}</td>
                            <td>{estudiante.acudiente}</td>
                            <td>{estudiante.telefono}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </div>
    )
}

export default Contenido_Buscar_Estudiante;