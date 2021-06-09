import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import exampleImg1 from './assets/exampleImg1.jpg';
import exampleImg2 from './assets/exampleImg2.jpg';
import exampleImg3 from './assets/exampleImg3.png';


class Tile extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const exampleTiles = [{no: 1 , bgImg: exampleImg1},{no: 2, bgImg: exampleImg2 },{no:3, bgImg: exampleImg3},4,5,6,7];

        const Tiles = exampleTiles.map((elem,index) => {
            
            return <div id={index} className='card' style={{backgroundImage: `url('${elem.bgImg}')`}}>
                    <div className='card__front' >
                        <h2 className='title'>Title</h2>
                        <p className='description'>This is an example for where a description will be placed</p>
                        <h3 className='title2'>Tools & Frameworks</h3>
                        <ul className='list'>
                            <li>List One</li><li>List Two</li> <li>List Three</li>
                        </ul>
                        <button type='button' className='card-button seeLive'><FontAwesomeIcon icon={faDesktop}/><span id='card-bt-text'>Live</span></button>
                        <button type='button' className='card-button viewCode'><FontAwesomeIcon icon={faCode}/><span id='card-bt-text'>Code</span></button>
                    </div>
                   </div>
        } )
        return (
            <div className='container-for-cards'>{Tiles}</div>
            
        )
    }
}

export default Tile;