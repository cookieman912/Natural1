import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AppHeader(){

  return(  
    <header className="main-header">
      <div className="header-container">
     <p>Natural 1</p>
     <ul>
       <li>
       <NavLink activeClassName="active-nav" exact to="/">Home</NavLink>

       </li>
   
       <li>
       <NavLink activeClassName="active-nav" exact to="/charactermanager">Characters</NavLink>
       </li>

       <li>
       <NavLink activeClassName="active-nav" exact to="/games">games</NavLink>
       </li>

       
       <li>
       <NavLink activeClassName="active-nav" exact to="/about">about</NavLink>
       </li>
     </ul>
     </div>

    </header>
  )
}