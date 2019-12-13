let initState = {

    links : ["home","usuarios","tickets","contacto"],
    contador : 0,
    nombre : "",
    apellido : "",
    idx : 0,
    editar : false,
    usuarios : [
        {'nombre' : 'Slytherin', 'apellido': 'Rules'},
        {'nombre' : 'ViernesNoche', 'apellido': 'BirraYReact'},
        {'nombre' : 'NoMeCansoDe', 'apellido': 'TantosBichos'},
        {'nombre' : 'PasateAPython', 'apellido': 'DeUnaVez'}
    ]
}

let reducer = (estadoAnterior = initState, action) => {

    switch(action.type) {

        // ...estadoAnterior es todo lo que diga ...this.state
        // eso es para migrar de React a redux!!

        case "CONTADOR_RESTAR" :

            return { 
                ...estadoAnterior, 
                contador : estadoAnterior.contador - 1 
            }

        case "CONTADOR_AUMENTAR" :

            return { 
                ...estadoAnterior, 
                contador : estadoAnterior.contador + 1 
            }

        case "CONTADOR_RESETEAR" :

            return { 
                ...estadoAnterior, 
                contador : 0
            }

        // copiamos todo exactamente igual a como estaba
        // la clase anterior, en los estados y acciones de react

        case "USUARIO_AGREGAR" :

            return { 
                ...estadoAnterior,

                usuarios : [
                    ...estadoAnterior.usuarios,
                    {
                        nombre : estadoAnterior.nombre,
                        apellido : estadoAnterior.apellido
                    }
                ],

                nombre : "",
                apellido : "" 
            }

        case "USUARIO_EDITFORM":
            return {

                ...estadoAnterior,
                usuarios : [

                    ...estadoAnterior.usuarios.slice(0, estadoAnterior.idx),
                    {
                        nombre : estadoAnterior.nombre,
                        apellido : estadoAnterior.apellido
                    },
                    ...estadoAnterior.usuarios.slice(estadoAnterior.idx + 1)
                ],
                nombre : "",
                apellido : "",
                editar : false
            }

        case "USUARIO_EDITAR" :

            return { 
            ...estadoAnterior, 
                [action.target.id] : action.target.value
            }

        case "USUARIO_BORRAR" :

            // Forma lenta:

            // let copia = estadoAnterior.usuarios.slice(0)
            // copia.splice(action.i,1)   

            // return { 
            //     ...estadoAnterior, 
            //     usuarios : copia
            // }

            // Forma rapida

            return {
                ...estadoAnterior,

                usuarios : [
                    ...estadoAnterior.usuarios.slice(0, action.i),
                    ...estadoAnterior.usuarios.slice(action.i + 1)
                ]
            }

        case "USUARIO_DEBUGGEAR" :

            let {nombre, apellido} = estadoAnterior.usuarios[action.i]

            return {
                ...estadoAnterior,
                nombre,
                apellido,
                editar : true,
                idx : action.i
            }

        // si es la priemra vez que se ejecuta una accion, cae
        // en el estado inicial, y retorna lo custom

        default :
            return estadoAnterior
    }
}

export default reducer