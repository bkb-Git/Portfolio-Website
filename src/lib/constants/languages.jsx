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
import { ReactComponent as Express } from 'assets/svg/express.svg';
import { ReactComponent as MongoDB } from 'assets/svg/MongoDBLogo.svg';
import { ReactComponent as Nodejs } from 'assets/svg/NodeJSLogo.svg';

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
  Express: <Express width="32px" height="32px" />,
  MongoDB: <MongoDB width="32px" height="32px" />,
  NodeJS: <Nodejs width="32px" height="32px" />,
  RestAPIs: <RestApiSvg width="24px" height="28px" />,
  Redux: <ReduxSvg width="24px" height="28px" />,
  Git: <GitSvg width="24px" height="28px" />,
  MailGun: <MailgunSVG width="24px" height="28px" />,
};

const Languages = {
  React: { icon: Icons.React, displayText: 'React' },
  NextJs: { icon: Icons.NextJS, displayText: 'Next JS' },
  Javascript: { icon: Icons.Javascript, displayText: 'JavaScript' },
  HTML5: { icon: Icons.HTML5, displayText: 'HTML5' },
  SCSS: { icon: Icons.SCSS, displayText: 'SCSS' },
  Redux: { icon: Icons.Redux, displayText: 'Redux' },
  NodeJS: { icon: Icons.NodeJS, displayText: 'Node JS' },
  MongoDB: { icon: Icons.MongoDB, displayText: 'Mongo DB' },
  Express: { icon: Icons.Express, displayText: 'Express JS' },
  AntDesign: { icon: Icons.AntDesign, displayText: 'Ant Design' },
  Bootstrap: { icon: Icons.Bootstrap, displayText: 'Bootstrap' },
  D3js: { icon: Icons.D3js, displayText: 'D3' },
  Firebase: { icon: Icons.FirebaseAuth, displayText: 'Firebase' },
  Git: { icon: Icons.Git, displayText: 'Git' },
  RestAPIs: { icon: Icons.RestAPIs, displayText: 'REST APIs' },
  MailGun: { icon: Icons.MailGun, displayText: 'Mailgun API' },
};

export default Languages;
