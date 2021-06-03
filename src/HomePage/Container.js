import {ArrowIcon} from './SNSNavBar';
import {Link} from 'react-router-dom';
import Intro from './Intro';

export default function Container(props) {
    
    return(
        <div>
          <div className='ContainerBgImg'>
           <Intro />
          </div>
            <Link to='/projects'>
              <div className='div'> 
                  <ArrowIcon page='Home' />
                <div className='transition-icon'>
                </div>
              </div>
            </Link>
        </div>
    )
}


