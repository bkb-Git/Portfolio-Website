import {NavLink} from 'react-router-dom';

export default function Intro() {
    return (
    
    <div className='glassContainer'>
        <div className='intro'>
            <p className='p1 '> Hi , I'm <span id='name'>  Billy K. Bett </span><br></br></p>
            <p className='p2 '>I am a <span id='name'>Software Developer.</span><br></br></p>
            <p className='p3 '>Check out my <span id='name'>Projects</span><br></br></p>
            <p className='p4 '>If you like what you see <br></br></p>
            <p className='p5 '>Please <NavLink exact to='/about' className='contact-button'> Contact me.</NavLink></p>
        </div>
    </div>

    )
}