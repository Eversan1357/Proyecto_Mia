/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from "../componentes/Navegacion";
import Contenido_Instituciones from "../componentes/Contenido_Instituciones";

class Instituciones extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Instituciones />
      </>
    )
  }
}
export default Instituciones;