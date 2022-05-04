/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Facturacion from "../componentes/Contenido_Facturacion";

class Facturacion extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Facturacion />
      </>
    )
  }
}
export default Facturacion;