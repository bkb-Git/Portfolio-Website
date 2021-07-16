import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faHome } from '@fortawesome/free-solid-svg-icons';

const sns = [
  {
    id: 1,
    name: 'Home',
    icon: faHome,
    color: '#008000',
    onClick: (history, appContext) => {
      appContext.updateNextRoute('/');
      history.push('/');
    },
  },
  {
    id: 2,
    name: 'About',
    icon: faAddressBook,
    color: ' #720058',
    onClick: (history, appContext) => {
      appContext.updateNextRoute('/about');
      history.push('/about');
    },
  },
  {
    id: 3,
    name: 'Facebook',
    link: 'https://www.facebook.com/billykbett',
    icon: faFacebook,
    color: '#4267b2',
  },
  {
    id: 4,
    name: 'Github',
    link: 'https://github.com/bkb-Git',
    icon: faGithub,
    color: '#bd2c00',
  },
  {
    id: 5,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/billykbett',
    icon: faLinkedin,
    color: '#0077b5',
  },
];

export default sns;
