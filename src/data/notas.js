export const obtenerNotas = () => {
    const notas = localStorage.getItem("notas");
    
    if(!notas){
        localStorage.setItem("notas", JSON.stringify([]))
    }
    
    return JSON.parse(notas) || []
}

export const agregarNota = (nuevaNota) => {
    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    
    notas.push(nuevaNota)
    
    localStorage.setItem("notas", JSON.stringify(notas))
}

export const editarNota = (idNota, objetoNota) => {
    const notas = JSON.parse(localStorage.getItem("notas"));
    const {titulo, contenido} = objetoNota

    if(!notas){
        throw new Error("No tienes notas para editar")
    }

    const notasModifcadas = notas.map(nota => {
        if(nota.id === idNota){

            nota.titulo = titulo
            nota.contenido = contenido

            return nota
        }

        return nota
    })

    return notasModifcadas
}

export const eliminarNota = (idNota) => {
    const notas = JSON.parse(localStorage.getItem("notas"));
    
    if(!notas){
        throw new Error("No tienes notas para eliminar")
    }

    const notasModifcadas = notas.filter(nota => nota.id != idNota)

    localStorage.setItem("notas", JSON.stringify(notasModifcadas))
}

export const filtrarNotas = (filtros) => {
    const notas = obtenerNotas()

    console.log(notas)
    console.log(filtros)
}