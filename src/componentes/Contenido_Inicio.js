import React, { Component } from 'react'
import './Contenido_Inicio.css'


export default class Contenido_Inicio extends Component {
    render() {
        return (
            <body >
                <div id='div_ruta'>
                    <div id='div_rutas'>
                        <img id="icono" src='/img/icono_inicio.png' alt='' />
                        <text id='text_rutas'>Inicio</text>
                    </div>
                </div>
                <hr />
                Bienvenido al Sistema
                <br />
                <form id="formulario_inicio">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Usuario</label>
                        <input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp" placeholder="Usuario" />
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="exampleInputEmail1">Rol</label>
                        <input type="text" class="form-control" id="example" aria-describedby="emailHelp" placeholder="Rol" />
                    </div>
                </form>
            </body>
        )
    }
}
