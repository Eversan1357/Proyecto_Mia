/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Cambiar_Clave from "../componentes/Contenido_Cambiar_Clave";

class Cambiar_Clave extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Cambiar_Clave />
      </>
    )
  }
}
export default Cambiar_Clave;