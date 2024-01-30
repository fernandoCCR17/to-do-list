import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"
import LabelNota from "./LabelNota"
import Modal from "./Modal";
import FormularioConfirmar from "./FormularioConfirmar";
import { formatearFecha } from "../helpers";

const Nota = ({nota}) => {
    const [showModalFormulario, setShowModalFormulario] = useState(false)
    const [showModalNota, setShowModalNota] = useState(false)
    const [animationModal, setAnimationModal] = useState(false)
    const [animacionBorrarNota, setAnimacionBorrarNota] = useState(false)

    useEffect(() => {
        if(animacionBorrarNota){
            setTimeout(() => {
                
            }, 1500);
        }
    }, [animacionBorrarNota])
    
    
    const navigate = useNavigate();

    function handleButtonModal(handlerShowModal){
        handlerShowModal(true)
        setTimeout(() => {
            setAnimationModal(true)
        }, 300);
    }
    
    function handleButtonCancelar(handlerShowModal){
        setAnimationModal(false)
        setTimeout(() => {
            handlerShowModal(false)
        }, 300);
    }

    const {id, titulo, contenido, fecha} = nota;

    return (
        <>
            <div className={`overflow-hidden nota ${animacionBorrarNota ? "eliminar" : ""}`}>
                <div className="mt-6 flex justify-between items-center gap-2">
                    <LabelNota id={id} titulo={titulo} fecha={fecha} setAnimacionBorrarNota={setAnimacionBorrarNota} />

                    <div className="nota__iconos flex flex-col md:flex-row gap-1 md:gap-3 w-1/12 md:w-auto">
                        <button type="button" className="w-7 cursor-pointer" 
                            onClick={() => handleButtonModal(setShowModalNota)}
                        >
                            <img className="pointer-events-none" src="./img/eye.svg" alt="icono de un ojo" />
                        </button>

                        <button type="button" className="w-7 cursor-pointer" 
                            onClick={() => navigate(`/notas/${id}/editar`)}
                        >
                            <img className="pointer-events-none" src="./img/edit.svg" alt="icono de un lápiz" />
                        </button>
                        
                        
                        <button 
                            type="button" 
                            className="w-7 cursor-pointer" 
                            onClick={() => handleButtonModal(setShowModalFormulario)}
                        >
                            <img className="pointer-events-none" src="./img/trash.svg" alt="icono de un bote de basura" />
                        </button>

                        
                    </div>
                </div>
            </div>

            { showModalFormulario && (
                 <Modal animationModal={animationModal} id={id}>
                    <div className="w-20 h-20 my-3 mx-auto">
                        <img className="w-full h-full pointer-events-none" src="./img/alert.svg" alt="Icono de una señal de alerta" />
                    </div>

                    <h2 className="text-2xl lg:text-4xl font-bold text-center text-red-700">¿Estas seguro?</h2>

                    <p className="text-xl text-center lg:w-5/6 mt-6 mb-5 mx-auto">Esta acción eliminara tu nota permanentemente. ¡No serás capaz de revertir esto!</p>

                    <div className="flex flex-col md:flex-row justify-center gap-5">
                        <FormularioConfirmar id={id}/>

                        <button
                            className="font-bold md:px-6 py-2 text-red-700 border border-red-700 rounded-md transition-colors hover:bg-slate-200" 
                            type="button"
                            onClick={() => handleButtonCancelar(setShowModalFormulario)}
                        >Cancelar</button>
                    </div>
                 </Modal>
            )}
            
            { showModalNota && (
                 <Modal animationModal={animationModal} id={id}>
                    <div className="px-3">
                        <h2 className="text-2xl lg:text-4xl font-bold text-orange-600">{titulo}</h2>
                        <p className="mt-2">Fecha creación: {formatearFecha(fecha, "dd-mm-yyyy hh:min")}</p>
                    </div>

                    <p className="text-xl px-3 mt-2 mb-5 mx-auto">
                        {contenido}
                    </p>

                    <button 
                        type="button" 
                        className="w-11 h-11 my-3 mx-auto absolute top-3 md:top-3 right-3 md:right-5"
                        onClick={() => handleButtonCancelar(setShowModalNota)}
                    >
                        <img className="w-full h-full pointer-events-none" src="./img/close.svg" alt="Icono de una x" />
                    </button>
                 </Modal>
            )}
        </>
    )
}

Nota.propTypes = {
    nota: PropTypes.object.isRequired
}

export default Nota