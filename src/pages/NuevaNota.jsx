import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarNota } from "../data/notas";
import { generarID } from "../helpers";

export async function action({request}){
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);

    const errores = [];
    if(Object.values(datos).includes("")){
        errores.push("Todos los campos son obligatorios")
    }

    if(Object.keys(errores).length){
        return errores
    }

    datos.id = generarID()
    datos.fecha = Date.now()

    agregarNota(datos)

    return redirect("/")
}

function NuevaNota(){
    const navigate = useNavigate()
    const errores = useActionData();

    return(
        <>
            <div className="max-w-128 flex justify-between mx-auto">
                <h2 className="text-2xl font-bold">Crear Nota</h2>

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
                <Formulario/>

                <input className="block mx-auto border-2 border-orange-600 px-4 py-2 bg-orange-600 rounded-md font-bold text-white uppercase cursor-pointer transition-all hover:bg-transparent hover:text-black" type="submit" value="Crear Nota" />
            </Form>    
        </>
    )
}

export default NuevaNota;