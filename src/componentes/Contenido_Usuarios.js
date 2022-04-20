import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Contenido_Usuarios.css'

const Contenido_Usuarios = () => {

    const [instituciones, setInstituciones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/usuarios/listar')
            .then((response) => {
                return response.json()
            })
            .then((institucion) => {
                setInstituciones(institucion)
            })
    }, [])

    return (
        <div id="usuarios_div">
            <div id='usuarios_divruta'>
                <img id="usuarios_iconos" src='/img/icono_inicio.png' alt='' />
                <Link id="usuarios_linkinicio" to="/Inicio">Inicio/</Link>
                <img id="usuarios_iconos" src='/img/icono_administrador.png' alt='' />
                <text id='usuarios_textrutas'>Administrador/</text>
                <text id='usuarios_textrutas'>Usuarios</text>
            </div>

            <table id="usuarios_tabla" class="table table-striped">
                <thead>
                    <th id="usuarios_th" scope="col">Roles</th>
                </thead>
                <thead>
                    <tr>
                        <th id="usuarios_th" scope="col">Nombre</th>
                        <th id="usuarios_th" scope="col">Apellido</th>
                        <th id="usuarios_th" scope="col">Rol</th>
                        <th id="usuarios_th" scope="col">Estado</th>
                    </tr>
                </thead>
                {instituciones.map(instituciones => (
                    <tbody>
                        <tr key={instituciones.id}>
                            <td>{instituciones.unaPersona.nombre}</td>
                            <td>{instituciones.unaPersona.apellido}</td>
                            <td>{instituciones.roles.id}</td>
                            <td>{instituciones.unaPersona.estado}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}
export default Contenido_Usuarios;