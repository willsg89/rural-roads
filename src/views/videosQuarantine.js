import { useTranslation } from "react-i18next";
import Title from "components/Title";
import Video from "components/Video";
import firebase from "firebase/app";
import { Col, Row } from "react-bootstrap";

const videos = [
  { title: "video-far", src: "https://www.youtube.com/embed/qWlP02L18qE" },
  {
    title: "video-fortunate",
    src: "https://www.youtube.com/embed/QaN-e8D0t8c",
  },
  { title: "video-shortcut", src: "https://www.youtube.com/embed/9qB2ZrSvJDk" },
];

function VideosQuarantine() {
  const { t } = useTranslation();
  firebase.analytics().logEvent("videos_quarantine_load");
  return (
    <div>
      <Title>{t("menu.videos.quarantine")}</Title>
      <Row>
        {videos.map((video) => (
          <Col key={video.title} xs={12} md={6} style={{ padding: 10 }}>
            <Video
              onClick={() =>
                firebase
                  .analytics()
                  .logEvent("videos_" + video.title + "_click")
              }
              title={video.title}
              mb
              src={video.src}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default VideosQuarantine;
