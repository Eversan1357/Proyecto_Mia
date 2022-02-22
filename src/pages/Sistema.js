/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from "../componentes/Navegacion";
import Contenido_Sistema from "../componentes/Contenido_Sistema";

class Sistema extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Sistema />
      </>
    )
  }
}
export default Sistema;