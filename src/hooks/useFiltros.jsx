import { useContext } from "react"
import FiltrosContext from "../context/FiltrosProvider"

const useFiltros = () => {
  return useContext(FiltrosContext)
}

export default useFiltros