import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Usuarios.css'

class Contenido_Cambiar_Clave extends React.Component {
    render() {
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
                            <th id="usuarios_th" scope="col">Mensaje</th>
                            <th id="usuarios_th" scope="col">Rol</th>
                            <th id="usuarios_th" scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Administrador del Sistema</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Rector</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Docente</td>
                            <td>x</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;