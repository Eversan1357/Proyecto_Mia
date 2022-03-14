import React from "react";
import './Contenido_Cargar_Datos.css'

class Contenido_Cambiar_Clave extends React.Component {
    render() {
        return (
            <div id="div_datos">
                <div id='divruta'>
                    <div id='divrutas'>
                        <img id="iconos" src='/img/icono_inicio.png' alt='' />
                        <text id='textrutas'>Inicio/</text>
                        <img id="iconos" src='/img/icono_administrador.png' alt='' />
                        <text id='textrutas'>Administrador/</text>
                        <text id='textrutas'>Cargar Datos</text>
                    </div>
                </div>
                <hr />
                <form id="formulario_datos">
                    <label for="exampleInputEmail1" id="ins" >Tipo de Archivo:*</label>
                    <select id="ins" >
                        <option>Tipo de Archivo:</option>
                        <option>.jpg</option>
                        <option>.png</option>
                        <option>.rar</option>
                        <option>.zip</option>
                        <option>Documento de word</option>
                        <option>.pdf</option>
                    </select>
                    <label for="exampleInputEmail1" id="ins" >Año Lectivo:* </label>
                    <input type="text" class="form-control" id="ins" aria-describedby="emailHelp" placeholder="2022" />
                    <label for="exampleInputEmail1" id="ins" >Archivo:*</label>
                    <input type="file" class="form-control" id="ins" aria-describedby="emailHelp" />
                    <label for="exampleInputPassword1" id="ins" >Fecha Cargue:*</label>
                    <input type="date" class="form-control" id="ins" placeholder="Repetir Contraseña Nueva" />
                </form>
                <div id="boton_datos">
                    <div className='btn btn-danger' ><a href="./Cargar_Datos">Cargar Archivo</a></div>
                </div>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;