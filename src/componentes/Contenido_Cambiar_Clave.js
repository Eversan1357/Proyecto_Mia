import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Cambiar_Clave.css'
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';

export default class Contenido_Cambiar_Clave extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.usernameOrEmail,
            password: this.password
        };
        axios.put('http://localhost:8080/api/usuarios/actualizar/', data)
            .then(res => {
                console.log(data);
                console.log(res);
            })
            .catch(
                err => {
                    console.log(err);
                })
    };

    render() {
        return (
            <div id="clave_div">
                <div id='clave_divruta'>
                    <img id="clave_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="clave_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="clave_iconos" src='/img/icono_administrador.png' alt='' />
                    <label id='clave_rutas'>Administrador/</label>
                    <label id='Clave_rutas'>Cambiar Clave</label>
                </div>
                <Form onSubmit={this.handleSubmit} id="clave_form" ref={c => { this.form = c; }} >
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Usuario:*</label>
                        <Input
                            autoComplete="true"
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Ingrese su Usuario"
                            onChange={e => this.usernameOrEmail = e.target.value}
                        />
                    </div>
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Contraseña Actual:*</label>
                        <Input autoComplete="true"
                            type="password"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Clave Actual"
                            onChange={e => this.password = e.target.value}
                        />
                    </div>
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputEmail1" id="clave_inputs">Contraseña Nueva:*</label>
                        <Input autoComplete="true"
                            type="password"
                            className="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Clave Nueva"
                        />
                    </div>
                    <div id="clave_divinfomacion">
                        <label htmlFor="exampleInputPassword1" id="clave_inputs">Repetir Contraseña Nueva:*</label>
                        <Input autoComplete="true" type="password" className="form-control" placeholder="Repetir Contraseña Nueva" onChange={e => this.password = e.target.value} />
                    </div>
                    <div id="busc">
                        <CheckButton type="submit" className="btn btn-danger" ref={c => { this.checkBtn = c; }} >Actualizar Contraseña</CheckButton>
                    </div>
                </Form>
            </div>
        )
    }
}
