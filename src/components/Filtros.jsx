import useFiltros from "../hooks/useFiltros"

function Filtros() {
    const { filtros, opciones, setFiltros, resetear, setResetear} = useFiltros()
    const { tipo, ordenar } = filtros

    const arregloKeys = Object.keys(opciones[tipo])

    const handleSelect = (e) => {
        if(e.target.name === "tipo"){
            setFiltros({
                ...filtros,
                [e.target.name]: e.target.value,
                ["ordenar"]: Object.keys(opciones[e.target.value])[0]
            })

            return;
        }

        setFiltros({
            ...filtros,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row md:justify-between items-center gap-4 mt-2 md:mt-0">
                <div className="flex gap-2 items-center">
                    <label 
                        htmlFor="tipo"
                    >Filtrar por:</label>
                    <select 
                        name="tipo" 
                        id="tipo"
                        className="px-3 py-2 rounded-md bg-slate-100"
                        onChange={handleSelect}
                        value={tipo}
                    >
                        <option value="fecha">Fecha</option>
                        <option value="alfabeto">Alfabeto</option>
                    </select>
                </div>

                <div className="flex gap-2 items-center">
                    <label 
                        htmlFor="ordenar"
                    >Ordenar por:</label>
                    <select 
                        name="ordenar" 
                        id="ordenar"
                        className="px-3 py-2 rounded-md bg-slate-100"
                        onChange={handleSelect}
                        value={ordenar}
                    >
                        {arregloKeys.map(etiqueta => (
                            <option key={etiqueta} value={etiqueta}>{opciones[tipo][etiqueta]}</option>
                        ))}
                    </select>
                </div>

                {resetear && (
                    <button
                        onClick={() => {
                            setResetear(false)
                            setFiltros({
                                ...filtros,
                                ["buscador"]: ""
                            })
                        }}
                        className="px-4 py-2 bg-orange-600 uppercase font-black text-slate-100 rounded-md" 
                        type="button"
                    >
                            Mostrar todo
                    </button>
                )}
            </div>
        </>
    )
}

export default Filtros