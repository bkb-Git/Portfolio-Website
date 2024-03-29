import { Col, Grid, Row } from 'antd';

import { ReactComponent as MainPic } from 'assets/svg/MainPic.svg';
import { ReactComponent as CSSTag } from 'assets/svg/CSSTag.svg';
import { ReactComponent as GitHubTag } from 'assets/svg/GitHubTag.svg';
import { ReactComponent as HTMLTag } from 'assets/svg/HTMLTag.svg';
import { ReactComponent as ReactTag } from 'assets/svg/ReactTag.svg';
import { ReactComponent as JavaScriptTag } from 'assets/svg/JavaScriptTag.svg';

import './PictureSide.scss';

const { useBreakpoint } = Grid;

const PictureSide = () => {
  // Breakpoints destructured here
  const { xl, xxl } = useBreakpoint();

  // Breakpoints
  const is720p = xl && !xxl;
  const is1080pAndAbove = xxl;

  const determinePicSize = () => {
    let width;
    let height;

    if (is720p) {
      width = 450;
      height = 573.17;
    }

    if (is1080pAndAbove) {
      width = 600;
      height = 764.23;
    }

    return { width, height };
  };

  return (
    <Col span={12} className="pictureSide">
      <Row justify="center" align="middle">
        <CSSTag className="cssTag" width={160} height={80} />
        <GitHubTag className="gitHubTag" width={270} height={261} />
        <HTMLTag className="htmlTag" width={200} height={80} />
        <ReactTag className="reactTag" width={200} height={80} />
        <JavaScriptTag className="javascriptTag" width={200} heigth={80} />
        <MainPic {...determinePicSize()} />
      </Row>
    </Col>
  );
};

export default PictureSide;
