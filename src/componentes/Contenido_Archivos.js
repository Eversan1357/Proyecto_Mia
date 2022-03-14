import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Archivos.css'

class Contenido_Archivos extends React.Component {
    render() {
        return (
            <div id="archivos_div">
                <div id='archivos_divruta'>
                    <img id="archivos_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="archivos_linkinicio" to="/Inicio">Inicio</Link>
                    <img id="archivos_iconos" src='/img/icono_ayuda.png' alt='' />
                    <text id='archivos_textrutas'>Ayuda/</text>
                    <text id='archivos_textrutas'>Archivos</text>
                </div>
                <div id='archivos_selector'>
                    <text id="archivos_tema">Tema :</text>
                    <select id='archivos_seleccionar' class="form-select" >
                        <option >Selecione una Opción</option>
                        <option download="" href="" >Diccionario de Datos</option>
                        <option>Estrategia PAE</option>
                        <option>Formato Cargue</option>
                        <option>Formato Men Planillas</option>
                        <option>Consolidado Mensual Planilla</option>
                        <option>Instructivos</option>
                        <option>Cargue Manual Usuario</option>
                        <option>Cargue Matricula</option>
                        <option>Cargue Anexo 13A</option>
                        <option>Ingreso Huella estudiante Nuevo</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default Contenido_Archivos;