import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {borrarUsuario, editarUsuario} from "../../api/actions"

const Usuarios = ({usuarios, borrarUsuario, editarUsuario}) => {
    return (
        <ul>

            { usuarios.map( (usuario, i) => 

                <li key={i}>
                    {usuario.nombre} {usuario.apellido}

                    <button onClick={borrarUsuario.bind(null, i)} className="material-icons">clear</button>

                    <button onClick={editarUsuario.bind(null, i)} className='material-icons'>create</button>
                
                </li>
            )}
            
        </ul>
    )
}

// Forma rapida 

export default connect(
    ({usuarios}) => ({usuarios}), 
    dispatch => ({
        borrarUsuario : bindActionCreators(borrarUsuario, dispatch),
        editarUsuario : bindActionCreators(editarUsuario, dispatch)}
))(Usuarios)


// Forma Lenta

// let mapStateToProps = ({nombre, apellido}) => ({nombre, apellido})
//
// let mapDispatchToProps = dispatch => ({
//     manejarSubmit : bindActionCreators(manejarSubmit, dispatch),
//     cambiarCampo : bindActionCreators(cambiarCampo, dispatch)
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)

