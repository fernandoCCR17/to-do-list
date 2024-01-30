import { useState, useEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import useFiltros from "../hooks/useFiltros";
import Error from "./Error";

export async function action({request}){
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    const valores = Object.values(data);
    const errores = {}
    if(valores.includes("")){
        errores.error = "Ingrese por lo menos una palabra clave"
        return errores
    }

    errores.busqueda = valores[0]

    return errores
}

const FormularioBusqueda = () => {
    const errores = useActionData();
    const [buscar, setBuscar] = useState("")
    const { filtros , setFiltros, setResetear } = useFiltros()

    useEffect(() => {
        if(errores?.busqueda){
            setFiltros({
                ...filtros,
                ["buscador"]: errores.busqueda
            })

            setBuscar("")
            setResetear(true)
        }
    }, [errores])
    

    const handleInputText = (e) => {
        setBuscar(e.target.value)
    }
    
    return (
        <>
            <Form
                method="POST"  
                className="bg-white mx-6 rounded-sm flex gap-2 pr-3 items-center"
            >
                <input 
                    className=" block h-12 w-full p-3"
                    type="text" 
                    placeholder="Palabras clave: comida, tarea, lavar..." 
                    name="buscador" 
                    id="buscador" 
                    value={buscar}
                    onChange={(e) => handleInputText(e)}
                />

                <input
                    className="bg-orange-600 px-4 h-9 rounded-sm text-white uppercase font-bold cursor-pointer hover:bg-orange-700 transition-colors"
                    type="submit" 
                    value="Buscar" 
                />
            </Form>

            {errores?.error && 
                <Error
                >
                    {errores.error}
                </Error>
            }
        </>
    )
}

export default FormularioBusqueda;