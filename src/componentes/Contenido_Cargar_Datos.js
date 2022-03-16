import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Cargar_Datos.css'

class Contenido_Cambiar_Clave extends React.Component {
    render() {
        return (
            <div id="datos_div">
                <div id='datos_divruta'>
                    <img id="datos_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="datos_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="datos_iconos" src='/img/icono_administrador.png' alt='' />
                    <text id='datos_textrutas'>Administrador/</text>
                    <text id='datos_textrutas'>Cargar Datos</text>
                </div>
                <form id="datos_formulario">
                    <div id="datos_divinfomacion">
                        <label for="exampleInputEmail1" id="datos_inputstext" >Tipo de Archivo:*</label>
                        <select class="form-control" >
                            <option>Tipo de Archivo:</option>
                            <option>.jpg</option>
                            <option>.png</option>
                            <option>.rar</option>
                            <option>.zip</option>
                            <option>Documento de word</option>
                            <option>.pdf</option>
                        </select>
                    </div>
                    <div id="datos_divinfomacion">
                        <label for="exampleInputEmail1" id="datos_inputstext" >Año Lectivo:* </label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="2022" />
                    </div>
                    <div id="datos_divinfomacion">
                        <label for="exampleInputEmail1" id="datos_inputstext" >Archivo:*</label>
                        <input type="file" class="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div id="datos_divinfomacion">
                        <label for="exampleInputPassword1" id="datos_inputstext" >Fecha Cargue:*</label>
                        <input type="date" class="form-control" placeholder="Repetir Contraseña Nueva" />
                    </div>
                </form>
                <div id="datos_boton">
                    <button type="submit" class="btn btn-danger">Cargar Datos</button>
                </div>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;