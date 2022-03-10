/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import './Navegacion.css'
import { Link } from "react-router-dom";


export default function Navegacion() {
    return (
        <div>
            <header id="headermenu">
                <header id="titulos">
                    <div id="circulos"><div id="circulo"> </div><div id="circulo"> </div><div id="circulo"> </div></div>
                    <text id="texto_titulo">FUNDACIÓN MIA CONSTRUYENDO FUTURO</text>
                    <div></div>
                </header>
                <div id="div_horas">
                    <div />
                    <div />
                    <div id="div_hora" >
                        <input id="fecha" type="date" value="2022-03-07"></input>
                        <img id="dimagen" src="/img/icono_usuario.png" alt="" />
                        <text id="texto_admin" >Admin</text>
                    </div>
                </div>
                <ul id="menu">
                    <li id='item' ><Link id='link_menu' to="/Inicio">Inicio</Link></li>
                    <li id='item'><a href='#' className='menu_link'>Ayuda<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Sistema">Sistema</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Archivos">Archivos</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Administrador<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Cambiar_Clave">Cambiar_Clave</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Cargar_Datos">Cargar_Datos</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Permisos_Privilegios">Permisos_Privilegios</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Roles">Roles</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Usuarios">Usuarios</Link></li>
                            <li id='boxli'><Link className='menu_link' to="/Huella_Estudiante_Nuevo">Huella-Estudiante-Nuevo</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Instituciones<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Instituciones">Instituciones</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Estudiantes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Buscar_Estudiante">Buscar Estudiante</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Reportes<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'><Link className='menu_link' to="/Generar_Reportes">Generar Reportes</Link></li>
                        </ul>
                    </li>
                    <li id='item'><a href='#' className='menu_link'>Facturación<img id='imgflecha' src="/img/flecha_abajo.png" alt="" /></a>
                        <ul id='desple'>
                            <li id='boxli'> <Link className='menu_link' to="/Facturacion">Facturacion</Link></li>
                        </ul>
                    </li>
                </ul>
            </header>
        </div>
    )
}