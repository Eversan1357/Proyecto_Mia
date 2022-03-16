import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Cambiar_Clave.css'

class Contenido_Cambiar_Clave extends React.Component {
    render() {
        return (
            <div id="clave_div">
                <div id='clave_divruta'>
                    <img id="clave_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="clave_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="clave_iconos" src='/img/icono_administrador.png' alt='' />
                    <text id='clave_textrutas'>Administrador/</text>
                    <text id='clave_textrutas'>Cambiar Clave</text>
                </div>
                <form id="clave_form">
                    <div id="clave_divinfomacion">
                        <label for="exampleInputEmail1" id="clave_inputstext">Usuario:*</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Ingrese su Usuario" />
                    </div>
                    <div id="clave_divinfomacion">
                        <label for="exampleInputEmail1" id="clave_inputstext">Contraseña Actual:*</label>
                        <input type="password" class="form-control" aria-describedby="emailHelp" placeholder="Clave Actual" />
                    </div>
                    <div id="clave_divinfomacion">
                        <label for="exampleInputEmail1" id="clave_inputstext">Contraseña Nueva:*</label>
                        <input type="password" class="form-control" aria-describedby="emailHelp" placeholder="Clave Nueva" />
                    </div>
                    <div id="clave_divinfomacion">
                        <label for="exampleInputPassword1" id="clave_inputstext">Repetir Contraseña Nueva:*</label>
                        <input type="password" class="form-control" placeholder="Repetir Contraseña Nueva" />
                    </div>
                </form>
                <div id="busc">
                    <button type="submit" class="btn btn-danger">Actualizar Contraseña</button>
                </div>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;