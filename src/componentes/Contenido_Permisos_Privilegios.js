import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Permisos_Privilegios.css'

class Contenido_Permisos_Privilegios extends React.Component {
    render() {
        return (
            <div id="permisos_div">
                <div id='permisos_divruta'>
                    <img id="permisos_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="permisos_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="permisos_iconos" src='/img/icono_administrador.png' alt='' />
                    <text id='permisos_textrutas'>Administrador/</text>
                    <text id='permisos_textrutas'>Permisos y Privilegios</text>
                </div>
                <div id="permisos_selector">
                    <select>
                        <option>Rol</option>
                        <option>Rector</option>
                        <option>Administrador Sistema</option>
                        <option>Docente</option>
                        <option>Apoyo Supervición SED</option>
                        <option>Apoyo Interventoria SED</option>
                        <option>SEM</option>
                        <option>Operador-PAE</option>
                    </select>
                </div>
                <table id="permisos_tabla" class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Crear</th>
                            <th scope="col">Leer</th>
                            <th scope="col">Actualizar</th>
                            <th scope="col">Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Rector</th>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Administrador Sistema</th>
                            <td>Jx</td>
                            <td>x</td>
                            <td>x</td>
                            <td>x</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Contenido_Permisos_Privilegios;