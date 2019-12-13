import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from "../paginas/Home"
import Tickets from "../paginas/Tickets"
import Usuarios from "../paginas/Usuarios"
import Contactos from "../paginas/Contactos"

const Main = () => 
    <main>
        <Switch>

            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/usuarios' component={Usuarios}/>
            <Route path='/tickets' component={Tickets}/>
            <Route path='/contacto' component={Contactos}/>

        </Switch>
    </main>

export default Main


