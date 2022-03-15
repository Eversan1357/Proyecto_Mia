import { Link, Navigate } from "react-router-dom";
import { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from 'axios';

import './Contenido_Login.css'
import '../pages/Inicio'


export default class Contenido_Login extends Component {

  state = {}
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    };
    axios.post('http://localhost:8080/api/auth/iniciarSesion', data)
      .then(res => {
        localStorage.setItem('tokeDeAcceso', res.data.tokeDeAcceso);
        this.setState({
          loggedIn: true
        })
      })
      .catch(
        err => {
          console.log(err);
        })
  };

  render() {

    if (this.state.loggedIn) {
      return <Navigate to={'/Inicio'} />
    }

    const required = value => {
      if (!value) {
        return (
          <div className="alert alert-danger" role="alert">
            ¡Este campo es obligatorio!
          </div>
        );
      }
    };

    return (
      <>
        <div id="login_div_bienvenido">
          <h1 className="text-center" id='login_tex1'>Bienvenido</h1>
          <h2 className="text-center" id='login_tex2'>Fundación Mía</h2>
          <h3 className="text-center" id='login_tex3'>Construyendo Futuro</h3>
          <div id='login_imag'> <img src='/img/usuario50.jpg' alt='' /> </div>
        </div>
        <br />
        <Form onSubmit={this.handleSubmit} id="login_usform" ref={c => { this.form = c; }}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail">Usuario</label>
            <Input
              type="text"
              className="form-control"
              placeholder="Nombre"
              onChange={e => this.usernameOrEmail = e.target.value}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              onChange={e => this.password = e.target.value}
              validations={[required]}
            />
          </div>
          <div id="login_div_links">
            <Link id="login_link_res" to="/Login">He Olvidado Mi Contraseña</Link>
            <CheckButton className='btn btn-danger' ref={c => { this.checkBtn = c; }} >Ingresar</CheckButton>
          </div>
        </Form>
      </>
    );
  }
}