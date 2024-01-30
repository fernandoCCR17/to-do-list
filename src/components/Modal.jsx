import PropTypes from "prop-types"

function Modal({animationModal, children}) {
    return (
        <div 
            className={`animacion__modal ${animationModal ? "active" : ""} fixed flex justify-center items-center w-screen h-screen top-0 left-0 bg-black bg-opacity-30 z-30`}
        >
            <div className="relative w-5/6 max-w-142  min-h-4/6 bg-slate-100 p-10 rounded-md">
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    animationModal: PropTypes.bool.isRequired,
    children: PropTypes.any
}

export default Modal