import { faFacebook,  faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faHome } from "@fortawesome/free-solid-svg-icons";

const sns = [
    { id: 1 , name: 'Home',link: '/' , icon: faHome , color: '#008000' },
    { id: 2 , name: 'About', link: '/about', icon: faAddressBook , color: '#987456'},
    { id: 3 , name: 'Facebook', link: '', icon: faFacebook , color: '#4267b2' },
    { id: 4 , name: 'Github', link: '', icon: faGithub , color: '#bd2c00' }, 
    { id: 5 , name: 'LinkedIn', link: '', icon: faLinkedin , color: '#0077b5' }
];

export default sns;