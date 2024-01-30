import { useState } from "react"
import PropTypes from "prop-types"
import { formatearFecha } from "../helpers"
import { eliminarNota } from "../data/notas"

const LabelNota = ({ id, titulo, fecha, setAnimacionBorrarNota }) => {
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <label className="flex items-center gap-3 text-sm md:text-lg w-11/12 md:w-auto cursor-pointer nota__title py-1">
            <input 
                className="hidden nota__input" 
                type="checkbox" 
                id="prueba"
                onClick={() => {
                    setIsDisabled(true)
                    setTimeout(() => {
                        setAnimacionBorrarNota(true)
                    }, 700);

                    setTimeout(() => {
                        eliminarNota(id)
                    }, 2200);
                }} 
                disabled={isDisabled}
            />

            <span
                className="inline-block relative w-7 h-7 transition-all nota__span" 
            ></span>

            <span className="nota__texto font-semibold flex flex-col md:flex-row gap-2 md:items-center w-full md:w-auto overflow-hidden">
                <span className="nota__texto--width md:max-w-96 whitespace-nowrap overflow-hidden text-ellipsis">
                    {titulo}
                </span>
                <span className="text-xs text-slate-500 align-bottom">
                    {formatearFecha(fecha, "dd-mm-yyyy hh:min")}
                </span>
            </span>
        </label>
    )
}

LabelNota.propTypes = {
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    fecha: PropTypes.number.isRequired,
    setAnimacionBorrarNota: PropTypes.func.isRequired,
}

export default LabelNota