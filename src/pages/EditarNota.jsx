import { useNavigate, Form, useLoaderData, redirect, useActionData} from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { obtenerNotas, editarNota } from "../data/notas";

export function loader({params}){
    const loaderNotas = obtenerNotas();
    
    const nota = loaderNotas.filter(notaActual => notaActual.id === params.notaId)

    if(!nota.length){
        throw new Error("La nota que quieres editar no existe")
    }

    return nota
}

export async function action({request, params}){
    const formData = await request.formData();

    const datos = Object.fromEntries(formData)

    const errores = [];
    if(Object.values(datos).includes("")){
        errores.push("Todos los campos son obligatorios")
    }

    if(Object.keys(errores).length){
        return errores
    }

    const idNota = params.notaId

    const notasEditadas = editarNota(idNota, datos)

    localStorage.setItem("notas", JSON.stringify(notasEditadas))

    return redirect("/")
}

const EditarNota = () => {
    const navigate = useNavigate();
    const nota = useLoaderData()
    const errores = useActionData();

    return (
        <>
            <div className="max-w-128 flex justify-between mx-auto">
                <h2 className="text-2xl font-bold">Editar Nota</h2>

                <button 
                    className="bg-orange-600 px-3 py-1 rounded cursor-pointer hover:bg-orange-700 text-sm font-black text-white"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>

            {errores?.length ? errores.map((error, index) => (
                <Error
                    key={index}
                >
                    {error}
                </Error>
            )) : null }
            
            <Form
                method="POST" 
                className="max-w-128 mx-auto"
            >
                <Formulario
                    nota={nota[0]}
                />

                <input className="block mx-auto border-2 border-orange-600 px-4 py-2 bg-orange-600 rounded-md font-bold text-white uppercase cursor-pointer transition-all hover:bg-transparent hover:text-black" type="submit" value="Editar Nota" />
            </Form> 
        </>
    )
}

export default EditarNota