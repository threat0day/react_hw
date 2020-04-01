import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () =>(
    <nav>
    <div className="nav-wrapper 009688 teal px1">
      <a href="localhost" className="brand-logo">React + Typescipt</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация</NavLink></li>
      </ul>
    </div>
  </nav>
)