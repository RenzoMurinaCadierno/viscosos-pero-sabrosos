import React from 'react'

import {connect} from 'react-redux'

import {NavLink} from 'react-router-dom'


let Header = ({links}) => 
    <header>
        <h2><em>React todo enbichado</em></h2>
        <nav> 
            { links.map( (link, i) => 

                <NavLink key={i} to={`/${link}`}>
                    {link} 
                </NavLink>
            )}
        </nav>
    </header>


export default connect(
    store => {return { links : store.links }}
)(Header)