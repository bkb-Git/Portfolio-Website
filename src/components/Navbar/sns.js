import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faHome } from '@fortawesome/free-solid-svg-icons';

const sns = [
  {
    id: 1,
    name: 'Home',
    social: false,
    icon: faHome,
    color: '#008000',
    route: '/',
  },
  {
    id: 3,
    name: 'About',
    social: false,
    icon: faAddressBook,
    color: ' #720058',
    route: '/about',
  },
  {
    id: 3,
    name: 'Github',
    social: true,
    route: 'https://github.com/bkb-Git',
    icon: faGithub,
    color: '#bd2c00',
  },
  {
    id: 4,
    name: 'LinkedIn',
    social: true,
    route: 'https://www.linkedin.com/in/billykbett',
    icon: faLinkedin,
    color: '#0077b5',
  },
];

export default sns;
