import PropTypes from "prop-types"

const Formulario = ({nota}) => {
    return (
        <>
            <div className="my-4">
                <label className="font-semibold">
                    Titulo:
                    <input 
                        className="w-full px-4 py-3 rounded-md mt-2 border-2 border-orange-300 focus:outline-none focus:border-orange-400"
                        type="text" 
                        placeholder="Titulo de la nota"
                        name="titulo"
                        defaultValue={nota?.titulo}
                    />
                </label>
            </div>

            <div className="my-4">
                <label className="font-semibold">
                    Contenido:
                    <textarea 
                        className="w-full px-4 py-3 rounded-md mt-2 border-2 border-orange-300 focus:outline-none focus:border-orange-400"
                        placeholder="Contenido de la nota"
                        name="contenido" 
                        rows="8"
                        defaultValue={nota?.contenido}
                    >
                    </textarea>
                </label>
            </div>
        </>
    )
}

Formulario.propTypes = {
    nota: PropTypes.object
}

export default Formulario