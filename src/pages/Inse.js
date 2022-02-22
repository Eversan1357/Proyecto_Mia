/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Superior from "../componentes/Superior";
import Contenido_Inse from "../componentes/Contenido_Inse";

class Inse extends React.Component {
  render() {
    return (
      <>
        <Superior />
        <Contenido_Inse />
      </>
    )
  }
}
export default Inse;