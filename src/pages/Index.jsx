import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom"
import FormularioBusqueda from "../components/FormularioBusqueda"
import ListaNotas from "../components/ListaNotas"
import { obtenerNotas } from "../data/notas";
import useFiltros from "../hooks/useFiltros";

// eslint-disable-next-line react-refresh/only-export-components
export function loader(){
    const data = obtenerNotas()
    
    return data;
}

const Index = () => {
    const { setNotas, notasFiltradas } = useFiltros();
    const dataLoader = useLoaderData();

    useEffect(() => {
        setNotas(dataLoader)
    }, [dataLoader, setNotas])

    return (
        <>
            <FormularioBusqueda />
            
            <ListaNotas notasFiltradas={notasFiltradas} />

            <Link to="/notas/nuevo" className="w-12 h-12 p-2 cursor-pointer fixed bottom-2 right-2 lg:bottom-8 lg:right-8 flex justify-center items-cente rounded-full bg-orange-600 hover:bg-orange-700">
                <img className="pointer-events-none" src="./img/plus.svg" alt="icono plus para agregar nuevas notas" />
            </Link>
        </>
    )
}

export default Index