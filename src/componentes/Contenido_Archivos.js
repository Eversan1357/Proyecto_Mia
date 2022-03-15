import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Archivos.css'

class Contenido_Archivos extends React.Component {
    render() {
        return (
            <div id="archivos_div">
                <div id='archivos_divruta'>
                    <img id="archivos_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="archivos_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="archivos_iconos" src='/img/icono_ayuda.png' alt='' />
                    <text id='archivos_textrutas'>Ayuda/</text>
                    <text id='archivos_textrutas'>Archivos</text>
                </div>
                <div id='archivos_selector'>
                    <text id="archivos_tema">Tema :</text>
                    <select id='archivos_seleccionar' class="form-select" >
                        <option >Selecione una Opción</option>
                        <option download="FORMATO DE PLANILLA - 1" href="./public" >Diccionario de Datos</option>
                        <option>Estrategia PAE</option>
                        <option download="FORMATO DE PLANILLA - 1" href="./public/FORMATO DE PLANILLA -1" >Diccionario de Datos</option>
                    </select>
                </div>
            </div>
        )
    }
}
export default Contenido_Archivos;