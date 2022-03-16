import React from "react";
import { Link } from "react-router-dom";
import './Contenido_Generar_Reportes.css'

class Contenido_Generar_Reportes extends React.Component {
    render() {
        return (
            <div id="reportes_div">
                <div id='reportes_divruta'>
                    <img id="reportes_iconos" src='/img/icono_inicio.png' alt='' />
                    <Link id="reportes_linkinicio" to="/Inicio">Inicio/</Link>
                    <img id="reportes_iconos" src='/img/icono_reportes.png' alt='' />
                    <text id='reportes_textrutas'>Reportes/</text>
                    <text id='reportes_textrutas'>Generar Reportes</text>
                </div>
                <div id="reportes_form">
                    <div id="reportes_divinfomacion">
                        <text id="reportes_inputstext">Fecha Inicial:*</text>
                        <input id="reportes_inputstext" class="date" type="date" value="2022-02-04" ></input>
                    </div>
                    <div id="reportes_divinfomacion">
                        <text id="reportes_inputstext" >Fecha Final:*</text>
                        <input id="reportes_inputstext" class="date" type="date" value="2022-02-04" ></input>
                    </div>
                    <div id="reportes_divinfomacion">
                        <text id="reportes_inputstext">Reporte Grupos Poblacionales:*</text>
                        <select class="form-select">
                            <option>Internos</option>
                            <option>Indigenas</option>
                            <option>Negritudes</option>
                            <option>Internos</option>
                            <option>Victimas Del Conflicto Armado</option>
                            <option>NEE(Población Necesidades Especiales)</option>
                            <option>Ninguna De Las Anteriores</option>
                        </select>
                    </div>
                    <div id="reportes_divinfomacion">
                        <text id="reportes_inputstext">Tipo Reporte:*</text>
                        <select class="form-select">
                            <option>Formato Men-Planilla</option>
                            <option>Zona(Rural o Urbana)</option>
                            <option>Municipio</option>
                            <option>Sede Educativa</option>
                            <option>Sexo(F o M)</option>
                            <option>Consolidado Mensual Planilla</option>
                        </select>
                    </div>
                    <div id="reportes_divinfomacion">
                        <text id="reportes_inputstext">Reporte Tipo Alimentario:*</text>
                        <select class="form-select">
                            <option>AM</option>
                            <option>PM</option>
                            <option>Almuerzo</option>
                            <option>Ración Industrial</option>
                            <option>Ración Transportada en Caliente</option>
                            <option>RPC(Ración Para Preparar En Casa)</option>
                            <option>Bono</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div id="reportes_divinfomacion">
                        <text id="reportes_inputstext">Reporte Por Jornada:*</text>
                        <select class="form-select">
                            <option>Completa</option>
                            <option>Mañana</option>
                            <option>Tarde</option>
                            <option>Única</option>
                            <option>Otra</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div id="iconos_ger">
                        <div>
                            <img id="ico_ger" src='/img/icono_pdf.png' alt='' />
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">PDF</label>
                            </div>
                        </div>
                        <div>
                            <img id="ico_ger" src='/img/icono_excel.png' alt='' />
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Excel</label>
                            </div>
                        </div>
                        <div>
                            <img id="ico_ger" src='/img/icono_archivo_plano.png' alt='' />
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Archivo Plano</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="busc">
                    <button type="submit" class="btn btn-danger">Generar Reporte</button>
                </div>
            </div>
        )
    }
}
export default Contenido_Generar_Reportes;