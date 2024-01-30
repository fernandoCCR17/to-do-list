import { useRouteError } from "react-router-dom"
import imgError from "../assets/errorImg.svg"

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <div className="max-w-128 px-16 mx-auto">
                <img 
                    className=""
                    src={imgError} 
                    alt="imagen de un señor sentado frente a un computador en el que se muestra un error en pantalla" 
                />
            </div>

            <h2 className="font-black text-xl md:text-3xl lg:text-5xl uppercase text-center my-2">Ha ocurrido un error :o</h2>
            <p className="text-center text-lg md:text-xl lg:text-3xl underline text-orange-600">{error.message}</p>
        </div>
    )
}

export default ErrorPage