import {NavLink} from 'react-router-dom';


export default function Intro(props) {
    
    return (
        <p className='text'>
            <p><span id='text1'>Hi , I'm</span> <span id='sub-text1'>Billy<span id='sub-text2'>K.</span><span id='sub-text3'>Bett</span></span></p>
            <p><span id='text2'>I am a</span> <span id='sub-text4'>Software   Developer.</span></p>
            <p><span id='text3'>Check out my</span> <span id='sub-text5'>Projects</span></p>
            <p><span id='text4'> If you like what you see </span></p>
            <p><span id='text5'>Please</span> <NavLink exact to='/about' className='contact-button'> Contact me</NavLink></p>
        </p>
    )
}