import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import Title from 'components/Title';
import Video from 'components/Video';
import firebase from "firebase/app";

const AlbumImg = styled.img`
  max-width: 300px;
`;

const SocialImg = styled.img`
  height: 60px;
`;

function Main() {
  const { t } = useTranslation();
  firebase.analytics().logEvent('home_load');
  return (
    <Row>

      <Col lg="6" xs={{ span: 12, order: 1 }}>
        <Title>{t('home.new.album')}<br />{t('home.available')}</Title>
        <a onClick={() => firebase.analytics().logEvent('main_album_click')} href="https://open.spotify.com/artist/0Hjg5nGXnQ561j4Wm444D5" target="_blank" rel="noreferrer" >
          <AlbumImg className="mx-auto d-block" src="images/album-small.png" alt="" />
        </a>
      </Col>

      <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 3 }}>
        <Title>NO TIME TO REALIZE IT<br />(LYRIC VIDEO)</Title>
        <Video onClick={() => firebase.analytics().logEvent('main_video_click')} title="home-video" src="https://www.youtube.com/embed/NPbG0mfpLa0" />
      </Col>

      <Col lg={{ span: 6, order: 3 }} xs={{ span: 12, order: 2 }}>
        <Title>{t('home.listen.in')}</Title>
        <Row>
          <a onClick={() => firebase.analytics().logEvent('main_spotify_click')} href="https://open.spotify.com/artist/0Hjg5nGXnQ561j4Wm444D5" className="offset-lg-2 col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/spotify.svg?sanitize=true" alt="Spotify" />
          </a>
          <a onClick={() => firebase.analytics().logEvent('main_apple_click')} href="https://itunes.apple.com/us/artist/1441140961" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/itunes.svg?sanitize=true" alt="Apple Music" />
          </a>
          <a onClick={() => firebase.analytics().logEvent('main_youtube_music_click')} href="https://music.youtube.com/channel/UChnPv1pLuPd1aZE7Q4qo0Gw" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/youtube-music.svg?sanitize=true" alt="Youtube Music" />
          </a>
          <a onClick={() => firebase.analytics().logEvent('main_deezer_click')} href="https://www.deezer.com/br/album/79699542" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/deezer.svg?sanitize=true" alt="Deezer" />
          </a>
        </Row>
      </Col>

      <Col lg="6" xs={{ span: 12, order: 4 }}>
        <Title>{t('home.follow.us')}</Title>
        <Row>
          <a onClick={() => firebase.analytics().logEvent('main_youtube_click')} href="https://youtube.com/RuralRoads" className="offset-lg-2 col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/youtube.svg?sanitize=true" alt="Youtube" />
          </a>
          <a onClick={() => firebase.analytics().logEvent('main_facebook_click')} href="https://facebook.com/RuralRoadsBand" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/facebook.svg?sanitize=true" alt="Facebook" />
          </a>
          <a onClick={() => firebase.analytics().logEvent('main_instagram_click')} href="https://instagram.com/RuralRoadsBand" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/instagram.svg?sanitize=true" alt="Instagram" />
          </a>
          <a onClick={() => firebase.analytics().logEvent('main_twitter_click')} href="https://twitter.com/RuralRoadsBand" className="col-lg-2 col-3" target="_blank" rel="noreferrer" >
            <SocialImg className="mx-auto d-block" src="images/twitter.svg?sanitize=true" alt="Twitter" />
          </a>
        </Row>
      </Col>

    </Row>
  );
}

export default Main;






