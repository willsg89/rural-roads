import { useTranslation } from "react-i18next";
import Title from "components/Title";
import Video from "components/Video";
import firebase from "firebase/app";
import { Col, Row } from "react-bootstrap";

const videos = [
  { title: "video-start", src: "https://www.youtube.com/embed/QbzzNXFWmoM" },
  { title: "video-gian", src: "https://www.youtube.com/embed/4Z8_9AzhPaY" },
  { title: "video-fire", src: "https://www.youtube.com/embed/YIDWEL1630A" },
  { title: "video-fight", src: "https://www.youtube.com/embed/4xBnOajksEg" },
  { title: "video-blind", src: "https://www.youtube.com/embed/2fa0b6TXjFw" },
];

function VideosAnniversary() {
  const { t } = useTranslation();
  firebase.analytics().logEvent("videos_anniversary_load");
  return (
    <div>
      <Title>{t("menu.videos.anniversary")}</Title>
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

export default VideosAnniversary;
