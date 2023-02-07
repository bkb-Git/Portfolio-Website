import { Col, Row, Grid } from 'antd';

import { ReactComponent as Arrow } from 'assets/svg/Arrow.svg';

import IntroductionSide from './IntroductionSide';
import PictureSide from './PictureSide';

import './Home.scss';

const { useBreakpoint } = Grid;

const Home = () => {
  const { xs, sm, lg } = useBreakpoint();
  // eslint-disable-next-line no-unused-vars
  const isMobileOrTablet = (xs || sm) && !lg;

  // const fetchData = async (url) => {
  //   const response = await fetch(url);
  //   return response.json();
  // };

  // const gitUser = 'https://api.github.com/users/bkb-Git';
  // const events = 'https://api.github.com/users/bkb-Git/events';
  // const userRepos = 'https://api.github.com/users/bkb-Git/repos';

  // const fetchAll = async () => {
  //   const [data1, data2, data3] = await Promise.all([
  //     fetchData(gitUser),
  //     fetchData(events),
  //     fetch(userRepos)
  //       .then(async (res) => {
  //         const response = await res.json();

  //         return response;
  //       })
  //       .then(async (repos) => {
  //         // console.log(repos);
  //         const PRs = [];

  //         repos.forEach(async (repo) => {
  //           const fetchedRepo = await fetch(
  //             `https://api.github.com/repos/bkb-Git/${repo.name}`
  //           );

  //           const pulls = await fetchedRepo.json();

  //           PRs.push(pulls);
  //         });

  //         return PRs;
  //       }),
  //   ]);

  //   const PRs = data2.filter((item) => item.type === 'PullRequestEvent');
  //   console.log(data1.public_repos, PRs, data3);
  // };

  // useEffect(() => {
  //   fetchAll();
  // }, []);

  return (
    <Col span={24} style={{ height: 'calc(100vh - 100px)' }}>
      <Row justify="center" align="middle" className="Home">
        <IntroductionSide />
        <PictureSide />
        <Arrow className="arrow" />
      </Row>
    </Col>
  );
};

export default Home;
