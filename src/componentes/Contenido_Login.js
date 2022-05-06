import { Link, Navigate } from "react-router-dom";
import { Component } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import Input from "react-validation/build/input";
import axios from 'axios';

import './Contenido_Login.css'
import '../pages/pages_admin/Inicio_admin'

export default class Contenido_Login extends Component {

  state = {}
  handleSubmit = e => {
    e.preventDefault();

    const data = {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    };
    axios.post('http://localhost:8080/api/auth/iniciarSesion/', data)
      .then(res => {

        localStorage.setItem('tokeDeAcceso', res.data.tokeDeAcceso);

        console.log(res.data.unUsuario.roles[0].nombre)

        console.log(res.data)

        this.setState({
          tipoRol:(res.data.unUsuario.roles[0].nombre)
        })
      })
      .catch(
        err => {
          console.log(err);
          alert('Usuario o Contraseña Incorrectos')
        })
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    }
  }

  render() {

    if(this.state.tipoRol==="ROLE_ADMIN"){
      return <Navigate to={'/Inicio_admin'} />
    }
    if(this.state.tipoRol==="ROLE_COORDINADOR"){
      return <Navigate to={'/Archivos_admin'} />
    }
    if(this.state.tipoRol==="ROLE_RECTOR"){
      return <Navigate to={'/Inicio_rector'} />
    }
    if(this.state.tipoRol==="ROLE_CONTRATISTA"){
      return <Navigate to={'/Inicio_contratista'} />
    }
    
    

    const required = value => {
      if (!value) {
        return (
          <div className="alert alert-danger" role="alert" id="login_alerterror">
            ¡Este campo es obligatorio!
          </div>
        );
      }
    };




    return (
      <div id="login_back" >
        <div >.</div>
        <div className="form-floating" id="login_card">
          <div id="login_div_bienvenido"  >
            <h1 className="text-center" id='login_tex1'>Bienvenido</h1>
            <h2 className="text-center" id='login_tex2'>Fundación Mía</h2>
            <h3 className="text-center" id='login_tex3'>Construyendo Futuro</h3>
          </div>
          <div id="login_divimg">
            <img  id="login_img" src="/img/logo_mia.png" alt="" />
          </div>
          <Form onSubmit={this.handleSubmit} id="login_usform" ref={c => { this.form = c; }}>
            <div className="form-group">
              <label id="inicio_labels">Usuario</label>
              <Input
                type="text"
                className="form-control"
                placeholder="Usuario"
                autoComplete="username"
                onChange={e => this.usernameOrEmail = e.target.value}
                validations={[required]}
              />
            </div>
            <div className="form-group" id="login_passwordform" >
              <label id="inicio_labels">Contraseña</label>
              <Input
                type={this.state.showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Contraseña"
                autoComplete="current-password"
                onChange={e => this.password = e.target.value}
                validations={[required]}
              />
              <span id="password-icon"
                className="material-icons"
                onClick={() => this.setState({ showPassword: !this.state.showPassword })}
              >visibility</span>
            </div>
            <div id="login_div_link">
              <Link id="login_link_res" to="/">Restablecer Contraseña</Link>
            </div>
            <div id="login_div_boton">
              <CheckButton className="btn btn-success" id="login_boton_ingresar" ref={c => { this.checkBtn = c; }} >Inciar Sección
                <span className="material-icons">
                  login
                </span></CheckButton>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}