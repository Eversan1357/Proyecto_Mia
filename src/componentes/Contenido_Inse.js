import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Inse.css'

class Contenido_Inse extends React.Component {
  render() {
    return (
      <div id='inse_div'>
        <div id='inse_div_elegir'>
          <a href="/Login"><img src='/img/usuario50.jpg' alt='/Login' /></a>
          <br />
          <br />
          <Link id="inse_link" to="/Login">Usuario</Link>
        </div>
        <div id='inse_div_elegir'>
        <a href="/Hlogin"><img src='/img/usuario50.jpg' alt='/Login' /></a>
          <br />
          <br />
          <Link id="inse_link" to="/Hlogin">Huella</Link>
        </div>
      </div>
    )
  }
}
export default Contenido_Inse;