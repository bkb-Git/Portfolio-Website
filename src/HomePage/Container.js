import React from 'react';
import {ArrowIcon} from './SNSNavBar';
import {Link} from 'react-router-dom';
import Intro from './Intro';

function Container() {
    
    return(
        <div>
          <div className='ContainerBgImg'>
          <Intro />
          </div>
            <Link to='/projects'>
              <div className='div'> 
                  <ArrowIcon />
                <div className='transition-icon'>
                </div>
              </div>
            </Link>
        </div>
    )
}

export default Container;

