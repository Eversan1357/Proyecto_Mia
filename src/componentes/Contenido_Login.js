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



  statePassword = {
    isPasswordShown: false
  };
  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.statePassword;
    this.setState({ isPasswordShown: !isPasswordShown });
  };


  render() {

    const { isPasswordShown } = this.statePassword;


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
      <div id="login_back">
        <div >.</div>
        <div className="form-floating" id="login_card">
          <div id="login_div_bienvenido"  >
            <h1 className="text-center" id='login_tex1'>Bienvenido</h1>
            <h2 className="text-center" id='login_tex2'>Fundación Mía</h2>
            <h3 className="text-center" id='login_tex3'>Construyendo Futuro</h3>
          </div>
          <Form onSubmit={this.handleSubmit} id="login_usform" ref={c => { this.form = c; }}>
            <div className="form-group">
              <label id="inicio_labels">Usuario</label>
              <Input
                type="text"
                className="form-control"
                placeholder="Usuario"
                onChange={e => this.usernameOrEmail = e.target.value}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label id="inicio_labels">Contraseña</label>
              <Input
                type={isPasswordShown ? "text" : "password"}
                name="pass"
                className="form-control"
                placeholder="Contraseña"
                onChange={e => this.password = e.target.value}
                validations={[required]}
                id="input_contraseña"
              />
              <i className="fa fa-eye " onClick={this.togglePasswordVisiblity} />
            </div>
            <div id="login_div_link">
              <Link id="login_link_res" to="/">Restablecer Contraseña</Link>
            </div>
            <div id="login_div_boton">
              <CheckButton class="btn btn-danger" ref={c => { this.checkBtn = c; }} >Inciar Sección</CheckButton>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}