import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faHtml5,
  faReact,
  faSass,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

import AntDSvg from '../../assets/AntDSvg';
import D3Svg from '../../assets/D3Svg';
import FirebaseAuthSvg from '../../assets/FirebaseAuthSvg';
import NextJSSvg from '../../assets/NextJSSvg';
import RestApiSvg from '../../assets/RestApisSvg';
import ReduxSvg from '../../assets/ReduxSvg';
import GitSvg from '../../assets/GitSvg';
import MailgunSVG from '../../assets/MailgunSvg';

const LanguageIcons = {
  NextJS: <NextJSSvg width="1.5em" height="1em" color="#3d3d3d" />,
  AntDesign: <AntDSvg width="0.875em" height="1em" />,
  SCSS: <FontAwesomeIcon icon={faSass} color="#cf649a" />,
  Bootstrap: <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />,
  Javascript: <FontAwesomeIcon icon={faJs} color="#efd81d" />,
  React: <FontAwesomeIcon icon={faReact} color="#61c9ce" />,
  'D3.js': <D3Svg width="0.875em" height="1em" />,
  HTML5: <FontAwesomeIcon icon={faHtml5} color="#dc4d25" />,
  FirebaseAuth: <FirebaseAuthSvg width="0.875em" height="1em" />,
  RestAPIs: <RestApiSvg width="1em" height="1em" />,
  Redux: <ReduxSvg width="0.875em" height="1em" />,
  Git: <GitSvg width="0.875em" height="1em" />,
  'Mailgun API': <MailgunSVG width="0.875em" height="1em" />,
};

export default LanguageIcons;
