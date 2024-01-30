import PropTypes from "prop-types"
import Nota from "./Nota";
import SinNotas from "./SinNotas";
import Filtros from "./Filtros";

function ListaNotas({notasFiltradas}){
    return (
        <div className="border-t-2 border-orange-200 mt-8 p-6">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <h2 className="text-2xl font-bold">Notas</h2>

                <Filtros />
            </div>

            <div>
                {
                    notasFiltradas.length ? 
                    notasFiltradas.map(nota => <Nota 
                        key={nota.id}
                        nota={nota}
                    />) :
                    <SinNotas />
                }
            </div>
        </div>
    )
}

ListaNotas.propTypes = {
    notasFiltradas: PropTypes.array.isRequired,
}

export default ListaNotas;