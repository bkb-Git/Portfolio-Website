/* eslint-disable no-nested-ternary */
import {
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ArrowIcon(props) {
  const { page, backToHome } = props;

  const home = {
    NavPageTag: ['Projects'],
    color: 'rgb(255, 255, 255)',
    icon: [faAngleDoubleRight, 'fa-6x'],
    styleName: ['arrowButton', 'next-page-tag'],
  };
  const projects = {
    NavPageTag: ['About'],
    color: '#696867',
    icon: [faAngleDoubleDown, 'fa-6x'],
    styleName: ['arrowButton-1', 'next-page-tag-1'],
  };
  const about = [
    {
      NavPageTag: ['Back Home'],
      color: 'rgb(255,255,255)',
      icon: [faAngleDoubleLeft, 'fa-4x'],
      styleName: ['arrowButton-2-Home', 'next-pageTag-2-Home'],
    },
    {
      NavPageTag: ['Projects'],
      color: 'rgb(255,255,255)',
      icon: [faAngleDoubleUp, 'fa-4x'],
      styleName: ['arrowButton-3', 'next-page-tag-3'],
    },
  ];

  const currentPage =
    page === 1
      ? home
      : page === 2
      ? projects
      : backToHome
      ? about[0]
      : about[1];

  return (
    <div
      className={currentPage.styleName[0]}
      style={{ color: currentPage.color }}
    >
      <i className={currentPage.icon[1]} data={currentPage.NavPageTag[0]}>
        <FontAwesomeIcon icon={currentPage.icon[0]} />
      </i>
    </div>
  );
}
