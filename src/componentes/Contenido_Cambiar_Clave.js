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
                <form id="formulario">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Login:*</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Usuario" />
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Clave Actual:*</label>
                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Clave Actual" />
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Clave Nueva*</label>
                        <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Clave Nueva" />
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Repetir Contraseña Nueva</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repetir Contraseña Nueva" />
                    </div>
                    <br />
                    <div>
                        <div className='btn btn-danger' href='./Inicio'><a href="./Inicio">Actualizar Contraseña</a></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;