import React from "react";
import './Superior.css'

export default function Superior() {
  
    let fecha = new Date();
    const hora = fecha.toLocaleDateString();

    return (
        <div id='superior_header'>
          <div></div>
          <div id='superior_log'>
            <img src='/img/usuario50.jpg' alt='' />LOGIN
          </div>
          <div id='superior_fecha' >
            <input id="superior_fechas" type="text" defaultValue={hora}></input>
          </div>
        </div>
    )
  }
