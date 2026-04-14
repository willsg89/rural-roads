import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import Video from '../components/Video';
import { analytics, logEvent } from '../firebaseConfig';

function VideosFarm() {
    const { t } = useTranslation();
    logEvent(analytics, 'videos_farm_load');
    return (
        <div>
            <Title>{t('menu.videos.farm')}</Title>
            <Video onClick={() => logEvent(analytics, 'videos_farm_complete_click')} title="videos-1" mb src="https://www.youtube.com/embed/N2QA7LpNPkY" />
            <Video onClick={() => logEvent(analytics, 'videos_farm_anymore_click')} title="videos-2" src="https://www.youtube.com/embed/VJ7y9orKbX0" />
        </div>
    );
}

export default VideosFarm;
