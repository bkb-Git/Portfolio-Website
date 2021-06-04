import React from 'react';
import sns from '../sns.js';
import SNSNavBar from './SNSNavBar';
import {ArrowIcon} from './SNSNavBar';
import {Link} from 'react-router-dom';
import Intro from './Intro';


function Home(props) {
    return (
         <div>
            <SNSNavBar buttons={sns} />
                <div className='right-side-background'>
                    <Link to='/projects'>
                        <div className='div'> 
                            <ArrowIcon page='Home' />
                                <div className='transition-icon'>
                                </div>
                        </div>
                    </Link>
                </div>
            <div className='left-side-background'>
            </div>
            <Intro />
        
         </div>
    )
}

export default Home;