/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Permisos_Privilegios from "../componentes/Contenido_Permisos_Privilegios";

class Permisos_Privilegios extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Permisos_Privilegios />
      </>
    )
  }
}
export default Permisos_Privilegios;