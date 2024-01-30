export function generarID(){
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
}

export function formatearFecha(milisegundos, formato) {
    const fecha = new Date(milisegundos)
    const map = {
        dd: agregarCeroAlInicio(fecha.getDate()),
        mm: agregarCeroAlInicio(fecha.getMonth() + 1),
        yy: fecha.getFullYear().toString().slice(-2),
        yyyy: fecha.getFullYear(),
        hh: agregarCeroAlInicio(fecha.getHours()),
        min: agregarCeroAlInicio(fecha.getMinutes())
    }

    return formato.replace(/dd|mm|yyyy|yy|hh|min/gi, matched => map[matched]);
}

// Función auxiliar para agregar cero al inicio si el número es menor a 10
function agregarCeroAlInicio(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

export function ordenarFecha(arr, tipo){
    const aux = arr.sort(function(a, b){
        if(tipo === "nuevos"){
            return b.fecha - a.fecha
        }    
        return a.fecha - b.fecha
        
    })
    
    return aux
}

export function ordenarAlfabeticamente(arr, tipo){
    const aux = arr.sort((a,b) => {
        if(tipo === "ascendente"){
            return a.titulo.localeCompare(b.titulo)
        }
        return b.titulo.localeCompare(a.titulo)
    })

    return aux
}

export function filtrarNotas(arr, parametro){
    const arrParametro = parametro.toLowerCase().trim().split(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+/)
    const expresionRegular = new RegExp(arrParametro.join("|"), "i");

    const notasFiltradas = arr.filter(elemento => elemento.titulo.match(expresionRegular))
    return notasFiltradas
}