import React from "react";
import './Nav.css'

class Nav extends React.Component {
    render() {
        return (
            <div>
                <header id="headermenu">
                    <header id="titulos">
                        <div id="circulos"><div id="circulo"> </div><div id="circulo"> </div><div id="circulo"> </div></div>
                        <text id="texto_titulo">FUNDACIÓN MIA CONSTRUYENDO FUTURO</text>
                        <div></div>
                    </header>
                    <br />
                    <div id="div_horas">
                        <div />
                        <div />
                        <div id="div_hora" >
                            <input id="fecha" type="date" value="2022-02-07"></input>
                            <img id="dimagen" src="/img/icono_usuario.png" alt="" />
                            <text id="texto_admin" >Admin</text>
                        </div>
                    </div>
                    <br />
                    <footer id="foter">
                        <select id="select" aria-label="Default select example">
                            <option >Inicio</option>
                        </select>
                        <select id="select" class="selectpicker" aria-label="Default select example">
                            <option selected>Ayuda</option>
                            <option value="1" href='../pages/Inicio'>Sistema</option>
                            <option value="2" href='../pages/Inicio'>Archivos</option>
                        </select>
                        <select id="select" class="selectpicker" aria-label="Default select example">
                            <option value="0">Administrador</option>
                            <option value="1">Cambiar Clave</option>
                            <option value="2">Cargar Datos</option>
                            <option value="3">Permisos y Privilegios</option>
                            <option value="4">Roles</option>
                            <option value="5">Usuarios</option>
                            <option value="5">Cargue Huella Estudiante Nuevo</option>
                        </select>
                        <select id="select" class="selectpicker" aria-label="Default select example">
                            <option selected>Instituciones</option>
                            <option value="1">Instituciones</option>
                        </select>
                        <select id="select" class="selectpicker" aria-label="Default select example">
                            <option selected>Estudiantes</option>
                            <option value="1">Buscar Estudiante</option>
                        </select>
                        <select id="select" class="selectpicker" aria-label="Default select example">
                            <option selected>Reportes</option>
                            <option value="1">Generar Reportes</option>
                        </select>
                        <select id="select" class="selectpicker" aria-label="Default select example">
                            <option selected>Facturación</option>
                            <option value="1">Facturación</option>
                        </select>
                    </footer>
                </header>
            </div>
        )
    }
}
export default Nav;