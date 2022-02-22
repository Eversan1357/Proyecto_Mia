import React from "react";
import './Superior.css'

class Superior extends React.Component {
  render() {
    return (
      <>
        <div id='superior_header'>
          <div></div>
          <div id='superior_log'>
            <img src='/img/usuario50.jpg' alt='' />LOGIN
          </div>
          <div id='superior_fecha' >
            <input id="superior_fechas" className="date" type="date" defaultValue="2022-02-04" ></input>
          </div>
        </div>
      </>
    )
  }
}
export default Superior;