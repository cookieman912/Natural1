import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AppHeader(){


  return(  
    <header className="main-header">
     <p>Natural 1</p>
     <ul>
       <li>
       <NavLink activeClassName="active-nav" exact to="/">Home | </NavLink>

       </li>
   
       <li>
       <NavLink activeClassName="active-nav" exact to="/charactermanager">Characters | </NavLink>
       </li>

       <li>
       <NavLink activeClassName="active-nav" exact to="/games">games | </NavLink>
       </li>
     </ul>

    </header>
  )
}