/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from "../componentes/Navegacion";
import Contenido_Usuarios from "../componentes/Contenido_Usuarios";

class Usuarios extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Usuarios />
      </>
    )
  }
}
export default Usuarios;