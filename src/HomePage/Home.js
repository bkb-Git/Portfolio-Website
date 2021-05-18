import React from 'react';
import sns from '../sns.js';
import Container from './Container';
import SNSNavBar from './SNSNavBar';


function Home() {
    return (
        <div className='Container'>
         <div className='Homepage-background'></div>
         <Container />
         <SNSNavBar buttons={sns} />
        </div> 
    )
}

export default Home;