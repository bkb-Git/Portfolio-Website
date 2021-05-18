import React from 'react';
import '../home.css';
import '../app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

function SNSNavBar(props) {

    const buttons = props.buttons.map(elem => {
       return elem.name === 'Home' || elem.name === 'About' ? 
                <i className = 'button-icons fa-4x'>
                    <NavLink exact to={elem.link} style={{color: elem.color , textDecoration: 'none'}}>
                        <FontAwesomeIcon icon={elem.icon} />
                    </NavLink>
                </i>
            :  <i className = 'button-icons fa-4x' style={{color: elem.color}}>
                        <FontAwesomeIcon icon={elem.icon} />
               </i>;
            });
            
    return (
                <div className='side-nav-bar' > 
                    {buttons}
                    </div>
            )
}

function ArrowIcon() {
    return (
                    <i className='arrowButton fa-6x' >
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </i>
         )
}

export {ArrowIcon};
export default SNSNavBar;

