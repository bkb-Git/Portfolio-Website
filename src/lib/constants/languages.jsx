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
  NextJS: <NextJSSvg width="24px" height="28px" color="#3d3d3d" />,
  AntDesign: <AntDSvg width="24px" height="28px" />,
  SCSS: <FontAwesomeIcon size="2x" icon={faSass} color="#cf649a" />,
  Bootstrap: <FontAwesomeIcon size="2x" icon={faBootstrap} color="#563d7c" />,
  Javascript: <FontAwesomeIcon size="2x" icon={faJs} color="#efd81d" />,
  React: <FontAwesomeIcon size="2x" icon={faReact} color="#61c9ce" />,
  D3js: <D3Svg width="24px" height="28px" />,
  HTML5: <FontAwesomeIcon size="2x" icon={faHtml5} color="#dc4d25" />,
  FirebaseAuth: <FirebaseAuthSvg width="24px" height="28px" />,
  RestAPIs: <RestApiSvg width="24px" height="28px" />,
  Redux: <ReduxSvg width="24px" height="28px" />,
  Git: <GitSvg width="24px" height="28px" />,
  MailGun: <MailgunSVG width="24px" height="28px" />,
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
  Firebase: { icon: Icons.FirebaseAuth, displayText: 'Firebase' },
  RestAPIs: { icon: Icons.RestAPIs, displayText: 'REST APIs' },
  Redux: { icon: Icons.Redux, displayText: 'Redux' },
  Git: { icon: Icons.Git, displayText: 'Git' },
  MailGun: { icon: Icons.MailGun, displayText: 'Mailgun API' },
};

export default Languages;
