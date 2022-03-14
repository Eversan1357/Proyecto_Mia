import React from "react";
import './Contenido_Instituciones.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import institucioneService from '../services/institucion.service';

const Contenido_Instituciones = () => {

    const [instituciones, setInstituciones] = useState([]);
    useEffect(() => {
        institucioneService.getAll()
            .then(response => {
                console.log('printing the instituciones data', response.data);
                setInstituciones(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }, []);

    return (
        <div id="instituciones_ins">
            <div id='instituciones_divruta'>
                <img id="instituciones_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="instituciones_linkinicio" to="/Inicio">Inicio</Link>
                <img id="instituciones_iconos" src='/img/icono_instituciones.png' alt='' />
                <text id='instituciones_textrutas'>Instituciones</text>
            </div>
            <div id="card_ins">
                <text>Departamento*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
                <text>Municipio*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
                <text>E.E(Establecimiento Educativo):*</text>
                <input type="text" id="input_ins" class="form-control" placeholder="Institución Educativa">
                </input>
                <text>Sedes*</text>
                <select id='seleccionar' class="form-select">
                    <option>Selecione una Opción</option>
                </select>
            </div>
            <div id='busc_ins'>
                <button type="submit" class="btn btn-danger">Buscar</button>
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
                {instituciones.map(instituciones => (
                    <tbody>
                        <tr key={instituciones.idInstitucion}>
                            <td>{instituciones.codDane}</td>
                            <td>{instituciones.nombre}</td>
                            <td>{instituciones.rector.username}</td>
                            <td>{ }</td>
                            <td>{ }</td>
                            <td>{ }</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </div>
    )
}
export default Contenido_Instituciones;