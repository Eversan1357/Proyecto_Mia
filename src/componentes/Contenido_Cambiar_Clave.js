import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Cambiar_Clave.css'

class Contenido_Cambiar_Clave extends React.Component {
    render() {
        return (
            <div id="clave_div">
                <div id='clave_divruta'>
                    <div id='clave_divrutas'>
                        <img id="clave_iconos" src='/img/icono_inicio.png' alt='' />
                        <Link id="clave_textrutas" to="/Inicio">Inicio</Link>
                        <img id="clave_iconos" src='/img/icono_administrador.png' alt='' />
                        <text id='clave_textrutas'>Administrador/</text>
                        <text id='clave_textrutas'>Cambiar Clave</text>
                    </div>
                </div>
                <hr />
                <form id="formu_cambiar">
                    <label for="exampleInputEmail1">Login:*</label>
                    <input type="email" class="form-control" id="ins" aria-describedby="emailHelp" placeholder="Ingrese su Usuario" />
                    <label for="exampleInputEmail1">Clave Actual:*</label>
                    <input type="password" class="form-control" id="ins" aria-describedby="emailHelp" placeholder="Clave Actual" />
                    <label for="exampleInputEmail1">Clave Nueva*</label>
                    <input type="password" class="form-control" id="ins" aria-describedby="emailHelp" placeholder="Clave Nueva" />
                    <label for="exampleInputPassword1">Repetir Contraseña Nueva</label>
                    <input type="password" class="form-control" id="ins" placeholder="Repetir Contraseña Nueva" />
                </form>
                <div id="busc">
                    <button type="submit" class="btn btn-danger">Actualizar Contraseña</button>
                </div>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;