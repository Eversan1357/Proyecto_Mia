import React, { Component } from 'react'
import './Contenido_Beneficio_admin.css'
import { Link } from "react-router-dom";

export default class Contenido_Beneficio_admin extends Component {
    render() {
        return (
            <div id='beneficio_div'>
                <div id='beneficio_divruta'>
                    <img id="beneficio_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="beneficio_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="beneficio_iconos" src='/img/icono_estudiantes.png' alt='' />
                    <label id='beneficio_textrutas'>Beneficio/</label>
                    <label id='beneficio_textrutas'>Registro Beneficio</label>
                </div>
                <div id='cuadro'>
                    <div>
                    </div>
                </div>
                <div id='divbotones'>
                    <button id='botones' className='btn btn-danger'>
                        <a href='./Inicio' >Validar Ingreso</a>
                    </button>
                </div>
            </div>
        )
    }
}
