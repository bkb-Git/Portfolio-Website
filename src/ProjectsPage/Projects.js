import React from 'react';
import SNSNavBar from '../HomePage/SNSNavBar';
import sns from '../sns.js';
import Container from './container';


class Projects extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return(
        <div className='projects-p-background'>
        <SNSNavBar buttons={sns} page={2} />
        <Container />
        </div>
        )
    }
}

export default Projects;
