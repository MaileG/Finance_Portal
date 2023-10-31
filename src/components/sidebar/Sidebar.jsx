import React from 'react';
import '../../components/sidebar/Sidebar.css';
import Logo from '../../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
  return (
    <aside>
        <div class="d-flex flex-column flex-shrink-0 h-100">
            <div class="logo p-1">
                <NavLink to='/'><img src={Logo} alt="Logo" /></NavLink> 
            </div>

            <div class="left-bar">
                <ul class="nav nav-pills flex-column mb-auto p-0">
                    <li>
                       <NavLink to='/'> <FontAwesomeIcon icon={faHome} className="pe-2"></FontAwesomeIcon> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dpwi'> <FontAwesomeIcon icon={faArrowRight} className="pe-3"></FontAwesomeIcon>DPWI</NavLink>
                    </li>
                    <li>
                        <NavLink to='/pmte'> <FontAwesomeIcon icon={faArrowRight} className="pe-3"></FontAwesomeIcon>PMTE</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dpwi_pmte'> <FontAwesomeIcon icon={faArrowRight} className="pe-3"></FontAwesomeIcon>DPWI & PMTE</NavLink>
                    </li>
                </ul>
            </div>        
        </div>

    </aside>
  )
}

export default Sidebar