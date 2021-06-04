import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowIcon} from '../HomePage/SNSNavBar';
import Tile from './Tiles';

class Container extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <div className='Container-1'>
            <Tile />
            </div>
            <Link to='/about'>
              <div className='div-1'> 
                  <ArrowIcon page= 'Projects' />
                <div className='transition-icon-1'>
                </div>
              </div>
            </Link>
            </div>
        )
    }
}

export default Container;