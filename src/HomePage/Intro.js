import {NavLink} from 'react-router-dom';


export default function Intro(props) {
    
    return (
    
    <div className='glassContainer'>
        <div className='intro'>
            <p className='p1 '> Hi , I'm <span id='text1'>Billy  <span id='sub-text1'>K.</span><span id='sub-text2'>Bett</span></span><br></br></p>
            <p className='p2 '>I am a <span id='text2'>Software   Developer.</span><br></br></p>
            <p className='p3 '>Check out my <span id='text3'>Projects</span><br></br></p>
            <p className='p4 '>If you like what you see <br></br></p>
            <p className='p5 '>Please <NavLink exact to='/about' className='contact-button'> Contact me</NavLink></p>
        </div>
    </div>

    )
}