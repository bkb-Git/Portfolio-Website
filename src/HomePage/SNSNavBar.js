import React from 'react';
import {useState} from 'react';
import '../app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';

function SNSNavBar(props) {

    const [toggle, setToggle ] = useState(false);

    function handleEnter(e) {
        setToggle(true);
        
    }

    function handleLeave(e) {
        setToggle(false);
        
    }

    const buttons = props.buttons.map((elem,index) => {
       return elem.name === 'Home' || elem.name === 'About' ? 
                <i className = {`button-icons fa-4x icon${index}`}     
                   style={{borderLeftColor: toggle ? `${elem.color}` : ''}} 
                   onMouseEnter={handleEnter} 
                   onMouseLeave={handleLeave} 
                >
                    <NavLink exact to={elem.link} 
                             style={{textDecoration: 'none' }}
                             id={'link' + index}>
                              <FontAwesomeIcon icon={elem.icon} /> 
                     <label className='btn-label' for={`icon${index}`}>{elem.name}</label>
                    </NavLink>
                   
                 </i>
            :  <i className = {`button-icons fa-4x icon${index}`}
                  style={{borderLeftColor: toggle ? `${elem.color}` : ''}}  
                  onMouseEnter={handleEnter} 
                  onMouseLeave={handleLeave} >
                        <FontAwesomeIcon icon={elem.icon} />
                    <label className= 'btn-label' for={`icon${index}`}>{elem.name}</label>
               </i>;
            });
            
    return (
                <div className= {`side-navbar${props.page}`} > 
                    {buttons}
                    </div>
            )
}

function ArrowIcon(props) {
    const home = {NavPageTag: 'Projects' , color: 'rgb(255, 255, 255)' , icon: faAngleDoubleRight} ;
    const projects = {NavPageTag: 'About', color: '#696867', icon: faAngleDoubleDown};
    const about = {NavPageTag: 'Projects', color: 'rgb(255,255,255)', icon: faAngleDoubleLeft};

    const currentPage = props.page === 1 ? home : props.page === 2 ? projects : about ;
    return (
                    <div className={ currentPage === home ? 'arrowButton' : 'arrowButton-1'} style={{color: currentPage.color}}>
                    <i className=' fa-6x' >
                        <FontAwesomeIcon icon={currentPage.icon} />
                    </i>
                    <span id={ currentPage === home ? 'next-page-tag' : 'next-page-tag-1'} style={{color: currentPage.color}}>{currentPage.NavPageTag}</span>
                    </div>
         )
}

export {ArrowIcon};
export default SNSNavBar;

