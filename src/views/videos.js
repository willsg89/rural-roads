import { useTranslation } from "react-i18next";
import Title from 'components/Title';
import Video from 'components/Video';
import firebase from "firebase/app";

function Videos() {
    const { t } = useTranslation();
    firebase.analytics().logEvent('videos_load');
    return (
        <div>
            <Title>{t('menu.videos')}</Title>
            <Video onClick={() => firebase.analytics().logEvent('videos_ride_click')} title="videos-1" mb src="https://www.youtube.com/embed/67y6g61OaaM" />
            <Video onClick={() => firebase.analytics().logEvent('videos_no_time_click')} title="videos-2" src="https://www.youtube.com/embed/NPbG0mfpLa0" />
        </div>
    );
}

export default Videos;
