import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { filtrarNotas, ordenarFecha, ordenarAlfabeticamente } from "../helpers";


const FiltrosContext = createContext()

function FiltrosProvider({children}) {
    const [filtros, setFiltros] = useState({
        buscador: "",
        tipo: "fecha",
        ordenar: "nuevos"
    })
    const [notas, setNotas] = useState([])
    const [notasFiltradas, setNotasFiltradas] = useState([])
    const [resetear, setResetear] = useState(false)

    useEffect(() => {
        if(notas.length){
            let arrOrdenado = [...notas]

            if(filtros.buscador !== ""){
                arrOrdenado = filtrarNotas(arrOrdenado, filtros.buscador)
            }

            if(filtros.tipo === "fecha"){
                arrOrdenado = ordenarFecha(arrOrdenado, filtros.ordenar)
            }else{
                arrOrdenado = ordenarAlfabeticamente(arrOrdenado, filtros.ordenar)
            }
            setNotasFiltradas(arrOrdenado)
        }
    }, [notas, filtros])
    

    const opciones = {
        fecha: {
            nuevos: "nuevos",
            antiguos: "antiguos",
        },
        alfabeto: {
            ascendente: "A-Z",
            descendente: "Z-A",
        },
    }

    return (
        <FiltrosContext.Provider 
            value={{
                filtros,
                opciones,
                setFiltros,
                notas,
                setNotas,
                notasFiltradas,
                resetear,
                setResetear,
            }}
        >
            {children}
        </FiltrosContext.Provider>
    )
}

FiltrosProvider.propTypes = {
    children: PropTypes.any
}

export { FiltrosProvider }

export default FiltrosContext