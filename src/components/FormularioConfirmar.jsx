import { Form, redirect } from "react-router-dom";
import { eliminarNota } from "../data/notas";
import PropTypes from "prop-types"

export function action({params}){
    const notaId = params.notaId
    eliminarNota(notaId)

    return redirect("/")
}

function FormularioConfirmar({id}) {
    return (
        <Form
            method="POST"
            action={`/notas/${id}/eliminar`}
            className="w-full md:w-auto"
            >
            <button
                className="w-full font-bold md:px-6 py-2 bg-red-700 text-slate-100 rounded-md transition-colors hover:bg-red-800" 
                type="submit"
                >Sí, bórrala</button>
        </Form>
    )
}

FormularioConfirmar.propTypes = {
    id: PropTypes.string.isRequired
}

export default FormularioConfirmar