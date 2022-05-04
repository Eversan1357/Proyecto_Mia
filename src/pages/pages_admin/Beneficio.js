/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Beneficio from "../componentes/Contenido_Beneficio";

class Beneficio extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Beneficio />
      </>
    )
  }
}
export default Beneficio;