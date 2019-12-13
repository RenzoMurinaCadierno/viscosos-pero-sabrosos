import React from 'react'

import {connect} from 'react-redux'

import {aumentarContador, resetearContador, restarContador} from "../../api/actions"

import {bindActionCreators} from 'redux'

const Contador = ({contador,aumentarContador,restarContador,resetearContador}) => {
    return (
        <section>
            <h2>Tos Counter</h2>
            <p>Nro de tos : {contador} </p>
            <button onClick={aumentarContador} >+</button>
            <button onClick={resetearContador} >resetear</button>
            <button onClick={restarContador} >-</button>
        </section>
    )
}

// consumimos recursos del store con {contador},
// sino que tambien despachamos acciones. Van los dos
// parametros en connect()!!

// esta variable es para consumir desde el store.
// > Nosotros vamos a buscar el contador_redux desde el store y lo asignamos a la prop con el mismo nombre.

let mapStateToProps = store => {
    return { contador : store.contador }
}

// y con esta, pasamos las acciones (dispatch)

let mapDispatchToProps = dispatch => {
    return {

        // prop : bindActionCreators(accion, dispatch)
        
        aumentarContador : bindActionCreators(aumentarContador, dispatch),
        restarContador : bindActionCreators(restarContador, dispatch),
        resetearContador : bindActionCreators(resetearContador, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contador)
