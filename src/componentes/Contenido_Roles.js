import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Roles.css'

class Contenido_Login extends React.Component {
    render() {
        return (
            <div id="roles_div">
                <div id='roles_divruta'>
                    <img id="roles_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="roles_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="roles_iconos" src='/img/icono_administrador.png' alt='' />
                    <text id='roles_textrutas'>Administrador/</text>
                    <text id='roles_textrutas'>Roles</text>
                </div>
                <form id="roles_form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nuevo Rol:*</label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Nuevo Rol" />
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Mensaje:</label>
                        <input type="text" class="form-control" />
                    </div>
                    <br />
                    <div>
                        <div className='btn btn-danger' href='./Inicio'><a href="./Inicio">Crear</a></div>
                    </div>
                </form>

                <table class="table table-striped">
                    <thead>
                        <th scope="col">Roles</th>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col">Mensaje</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Eliminar</th>
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
export default Contenido_Login;