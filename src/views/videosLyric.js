import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import Video from '../components/Video';
import { analytics, logEvent } from '../firebaseConfig';

function VideosLyric() {
    const { t } = useTranslation();
    logEvent(analytics, 'videos_lyric_load');
    return (
        <div>
            <Title>{t('menu.videos.lyric')}</Title>
            <Video onClick={() => logEvent(analytics, 'videos_ride_click')} title="videos-1" mb src="https://www.youtube.com/embed/67y6g61OaaM" />
            <Video onClick={() => logEvent(analytics, 'videos_no_time_click')} title="videos-2" src="https://www.youtube.com/embed/NPbG0mfpLa0" />
        </div>
    );
}

export default VideosLyric;
