import React from "react";
import './Contenido_Cargar_Datos.css'

class Contenido_Cambiar_Clave extends React.Component {
    render() {
        return (
            <div id="div">
                <div id='divruta'>
                    <div id='divrutas'>
                        <img id="iconos" src='/img/icono_inicio.png' alt='' />
                        <text id='textrutas'>Inicio/</text>
                        <img id="iconos" src='/img/icono_administrador.png' alt='' />
                        <text id='textrutas'>Administrador/</text>
                        <text id='textrutas'>Cargar Datos</text>
                    </div>
                </div>
                <form id="formulario">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Tipo de Archivo:*</label>
                        <select>
                            <option>Tipo de Archivo:</option>
                            <option>.jpg</option>
                            <option>.png</option>
                            <option>.rar</option>
                            <option>.zip</option>
                            <option>Documento de word</option>
                            <option>.pdf</option>
                        </select>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Año Lectivo:* </label>
                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="2022" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Archivo:*</label>
                        <input type="file" class="form-control"  aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Fecha Cargue:*</label>
                        <input type="date" class="form-control"  placeholder="Repetir Contraseña Nueva" />
                    </div>
                    <br />
                    <div>
                        <div className='btn btn-danger' ><a href="./Cargar_Datos">Cargar Archivo</a></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Contenido_Cambiar_Clave;