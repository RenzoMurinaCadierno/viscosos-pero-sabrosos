export let aumentarContador = () => ( {type:"CONTADOR_AUMENTAR"} )

export let restarContador = () => ( {type:"CONTADOR_RESTAR"} )

export let resetearContador = () => ( {type:"CONTADOR_RESETEAR"} )


export let manejarSubmit = (e) => { 

    e.preventDefault()

    return {type:"USUARIO_AGREGAR"}
}

export let manejarEditar = (e) => { 

    e.preventDefault()

    return {type:"USUARIO_EDITFORM"}
}

// e es un objeto, por lo que hacemos destructuring de e.target

export let cambiarCampo = ({target}) => ( {type:"USUARIO_EDITAR", target} )

export let borrarUsuario = (i) => {
    
    return { type:"USUARIO_BORRAR", i }
}    

export let editarUsuario = (i) => {
    
    return { type:"USUARIO_DEBUGGEAR", i}
}    