/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Navegacion from '../componentes/Navegacion'
import Contenido_Hlogin from "../componentes/Contenido_Hlogin";

class Hlogin extends React.Component {
  render() {
    return (
      <>
        <Navegacion />
        <Contenido_Hlogin />
      </>
    )
  }
}
export default Hlogin;