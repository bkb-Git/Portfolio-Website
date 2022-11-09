// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
    id: 2,
    name: 'Projects',
    social: false,
    route: '/projects',
  },
  {
    id: 3,
    name: 'Skills',
    social: false,
    route: '/skills',
  },
  {
    id: 4,
    name: 'About',
    social: false,
    icon: faAddressBook,
    color: ' #720058',
    route: '/about',
  },
];

export default sns;
