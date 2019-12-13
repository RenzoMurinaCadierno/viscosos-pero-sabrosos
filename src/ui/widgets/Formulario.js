import React from 'react'
import Usuarios from './Usuarios'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {manejarSubmit, manejarEditar, cambiarCampo} from "../../api/actions"


const Formulario = ({cambiarCampo, nombre, apellido, editar, manejarSubmit, manejarEditar}) => {

    return (

        <div>

            <form onSubmit={editar ? manejarEditar : manejarSubmit}>

                <input value={nombre} id="nombre" onChange={cambiarCampo} type="text" placeholder="Nombre"/>

                <input value={apellido} id="apellido" onChange={cambiarCampo} type="text" placeholder="Apellido"/>

                <button>{editar ? "Desrenzear user" : "Venga el User"} </button>

            </form>

            <Usuarios />

        </div>
    )
}

// store es un objeto con nombre y apellido, por lo que podemos
// hacer destructuring
// >>> let mapStateToProps = store => ( {

let mapStateToProps = ({nombre, apellido, editar}) => ({nombre, apellido, editar})

let mapDispatchToProps = dispatch => ({
    manejarSubmit : bindActionCreators(manejarSubmit, dispatch),
    manejarEditar : bindActionCreators(manejarEditar, dispatch),
    cambiarCampo : bindActionCreators(cambiarCampo, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Formulario)


// o si no:

// export default connect({nombre, apellido}, mapDispatchToProps)(Formulario)