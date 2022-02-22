/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Archivos from "../componentes/Contenido_Archivos";

class Archivos extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Archivos />
      </>
    )
  }
}
export default Archivos;