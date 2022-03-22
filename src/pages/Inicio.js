/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from "../componentes/Navegacion";
import Contenido_Inicio from '../componentes/Contenido_Inicio';
import Contenido_Huella2 from '../componentes/Contenido_Huella2';

class Inicio extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Inicio />
        <Contenido_Huella2 />
      </>
    )
  }
}
export default Inicio;