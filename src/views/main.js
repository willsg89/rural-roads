import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import Title from '../components/Title';
import Video from '../components/Video';
import { analytics, logEvent } from '../firebaseConfig';

const AlbumImg = styled.img`
  max-width: 300px;
`;

const SocialImg = styled.img`
  height: 60px;
`;

function Main() {
  const { t } = useTranslation();
  logEvent(analytics, 'home_load');
  return (
    <Row>

      <Col lg="6" xs={{ span: 12, order: 1 }}>
        <Title>{t('home.album')}<br />{t('home.available')}</Title>
        <a onClick={() => logEvent(analytics, 'main_album_click')} href="https://open.spotify.com/album/5PX4aN2FVIuCyi56WE2dv7" target="_blank" rel="noreferrer" >
          <AlbumImg className="mx-auto d-block" src="images/album-small.jpg" alt="" loading="lazy"/>
        </a>
      </Col>

      <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 3 }}>
        <Title>FARM SESSIONS<br />(Live in Studio)</Title>
        <Video onClick={() => logEvent(analytics, 'main_video_click')} title="home-video" src="https://www.youtube.com/embed/N2QA7LpNPkY" />
      </Col>

      <Col lg={{ span: 6, order: 3 }} xs={{ span: 12, order: 2 }}>
        <Title>{t('home.listen.in')}</Title>
        <Row>
          <a onClick={() => logEvent(analytics, 'main_spotify_click')} href="https://open.spotify.com/artist/0Hjg5nGXnQ561j4Wm444D5" className="offset-lg-2 col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/spotify.svg?sanitize=true" alt="Spotify" loading="lazy"/>
          </a>
          <a onClick={() => logEvent(analytics, 'main_apple_click')} href="https://itunes.apple.com/us/artist/1441140961" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/itunes.svg?sanitize=true" alt="Apple Music" loading="lazy"/>
          </a>
          <a onClick={() => logEvent(analytics, 'main_youtube_music_click')} href="https://music.youtube.com/channel/UChnPv1pLuPd1aZE7Q4qo0Gw" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/youtube-music.svg?sanitize=true" alt="Youtube Music" loading="lazy"/>
          </a>
          <a onClick={() => logEvent(analytics, 'main_deezer_click')} href="https://www.deezer.com/br/album/79699542" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/deezer.svg?sanitize=true" alt="Deezer" loading="lazy"/>
          </a>
        </Row>
      </Col>

      <Col lg="6" xs={{ span: 12, order: 4 }}>
        <Title>{t('home.follow.us')}</Title>
        <Row>
          <a onClick={() => logEvent(analytics, 'main_youtube_click')} href="https://youtube.com/RuralRoads" className="offset-lg-2 col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/youtube.svg?sanitize=true" alt="Youtube" loading="lazy"/>
          </a>
          <a onClick={() => logEvent(analytics, 'main_facebook_click')} href="https://facebook.com/RuralRoadsBand" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/facebook.svg?sanitize=true" alt="Facebook" loading="lazy"/>
          </a>
          <a onClick={() => logEvent(analytics, 'main_instagram_click')} href="https://instagram.com/RuralRoadsBand" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/instagram.svg?sanitize=true" alt="Instagram" loading="lazy"/>
          </a>
          <a onClick={() => logEvent(analytics, 'main_twitter_click')} href="https://twitter.com/RuralRoadsBand" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/twitter.svg?sanitize=true" alt="Twitter" loading="lazy"/>
          </a>
        </Row>
      </Col>

    </Row>
  );
}

export default Main;
