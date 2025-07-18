import React, { useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <h1>Varun Singh</h1>
        </div>
        <div>
            <NavLink to={"/"} style={({ isActive }) => ({
                    color: isActive ? "#00d4ff" : "#cbd5e1",})}>Home</NavLink>
            <NavLink to={"/about"} style={({ isActive }) => ({
                    color: isActive ? "#00d4ff" : "#cbd5e1",})}>About</NavLink>
            <NavLink to={"/project"} style={({ isActive }) => ({
                    color: isActive ? "#00d4ff" : "#cbd5e1",})}>Projects</NavLink>
            <NavLink to={"/contact"} style={({ isActive }) => ({
                    color: isActive ? "#00d4ff" : "#cbd5e1",})}>Contacts</NavLink>
        </div>
    </div>
  )
}

export default (Navbar)
