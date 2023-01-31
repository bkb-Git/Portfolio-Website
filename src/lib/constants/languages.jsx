import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faHtml5,
  faReact,
  faSass,
  faJs,
} from '@fortawesome/free-brands-svg-icons';

import AntDSvg from 'assets/svg/AntDSvg';
import D3Svg from 'assets/svg/D3Svg';
import FirebaseAuthSvg from 'assets/svg/FirebaseAuthSvg';
import NextJSSvg from 'assets/svg/NextJSSvg';
import RestApiSvg from 'assets/svg/RestApisSvg';
import ReduxSvg from 'assets/svg/ReduxSvg';
import GitSvg from 'assets/svg/GitSvg';
import MailgunSVG from 'assets/svg/MailgunSvg';

const Icons = {
  NextJS: <NextJSSvg width="1.5em" height="1.5em" color="#3d3d3d" />,
  AntDesign: <AntDSvg width="1.5em" height="1.5em" />,
  SCSS: <FontAwesomeIcon size="1.5x" icon={faSass} color="#cf649a" />,
  Bootstrap: <FontAwesomeIcon size="1.5x" icon={faBootstrap} color="#563d7c" />,
  Javascript: <FontAwesomeIcon size="1.5x" icon={faJs} color="#efd81d" />,
  React: <FontAwesomeIcon size="1.5x" icon={faReact} color="#61c9ce" />,
  D3js: <D3Svg width="0.875em" height="1em" />,
  HTML5: <FontAwesomeIcon size="1.5x" icon={faHtml5} color="#dc4d25" />,
  FirebaseAuth: <FirebaseAuthSvg width="0.875em" height="1em" />,
  RestAPIs: <RestApiSvg width="1em" height="1em" />,
  Redux: <ReduxSvg width="0.875em" height="1em" />,
  Git: <GitSvg width="0.875em" height="1em" />,
  MailGun: <MailgunSVG width="0.875em" height="1em" />,
};

const Languages = {
  NextJs: { icon: Icons.NextJS, displayText: 'Next.js' },
  AntDesign: { icon: Icons.AntDesign, displayText: 'Ant Design' },
  SCSS: { icon: Icons.SCSS, displayText: 'SCSS' },
  Bootstrap: { icon: Icons.Bootstrap, displayText: 'Bootstrap' },
  Javascript: { icon: Icons.Javascript, displayText: 'JavaScript' },
  React: { icon: Icons.React, displayText: 'React' },
  D3js: { icon: Icons.D3js, displayText: 'D3' },
  HTML5: { icon: Icons.HTML5, displayText: 'HTML5' },
  Firebase: { icon: Icons.FirebaseAuth, displayText: 'Firebase Auth' },
  RestAPIs: { icon: Icons.RestAPIs, displayText: 'REST APIs' },
  Redux: { icon: Icons.Redux, displayText: 'Redux' },
  Git: { icon: Icons.Git, displayText: 'Git' },
  MailGun: { icon: Icons.MailGun, displayText: 'Mailgun API' },
};

export default Languages;
