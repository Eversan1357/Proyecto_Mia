import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Login.css'
import '../pages/Inicio'

class Contenido_Login extends React.Component {
  render() {
    return (
      <>
        <div id="login_div_bienvenido">
          <h1 className="text-center" id='login_tex1'>Bienvenido</h1>
          <h2 className="text-center" id='login_tex2'>Fundación Mía</h2>
          <h3 className="text-center" id='login_tex3'>Construyendo Futuro</h3>
          <div id='login_imag'> <img src='/img/usuario50.jpg' alt='' /> </div>
        </div>
        <br />
        <form id="login_usform">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Usuario</label>
            <input type="email" className="form-control" id="login_exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Usuario" />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" id="login_exampleInputPassword1" placeholder="Contraseña" />
          </div>
          <br />
          <div id="login_div_links">
            <Link id="login_link_res" to="/Login">He Olvidado Mi Contraseña</Link>
            <div className='btn btn-danger'><Link id="login_link" to="/Inicio">Ingresar</Link></div>
          </div>
        </form>
      </>
    )
  }
}
export default Contenido_Login;