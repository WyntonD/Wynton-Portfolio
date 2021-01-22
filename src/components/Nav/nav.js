import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './nav.css';

function Nav() {
    return(
        <div className="navigation">
            <NavLink to ="/">
                Home
            </NavLink>
            <NavLink to ="/about">
                About
            </NavLink>
            <NavLink to ="/resume">
                Resume
            </NavLink>
            <NavLink to ="/skills">
                Skills
            </NavLink>
            <NavLink to ="/projects">
                Projects
            </NavLink>
            <NavLink to ="/contact">
                Contact
            </NavLink>
        </div>
    )
}

export default Nav;