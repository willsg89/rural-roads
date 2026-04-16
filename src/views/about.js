import styled from 'styled-components';
import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import { analytics, logEvent } from '../firebaseConfig';

const BioImage = styled.img`
  margin-bottom: 30px;
  max-width: 300px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const AtualImage = styled.img`
  margin-bottom: 30px;
  max-width: 500px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InnerAbout = styled.div`
  max-width: 600px;
`;

function About() {
  logEvent(analytics, 'about_load');

  const { t } = useTranslation();

  return (
    <ContainerAbout >

      <Title>RURAL ROADS</Title>
      <InnerAbout >
        <p>{t('about.heavy.band')}</p>
        <AtualImage src="images/biografia/atual.jpg" className="img-fluid" alt="" loading="lazy" />
        <span>{t('about.current.members')}:</span>
        <p>{t('about.formiga')}<br />
          {t('about.papao')}<br />
          {t('about.gian')}<br />
          {t('about.will')}<br />
          {t('about.carames')}<br />
        </p>
      </InnerAbout>
      <Title uppercase={false}>{t('about.bio')}</Title>
      <InnerAbout >
        <p>{t('about.founded.by.formiga.and.papao')}</p>
        <BioImage  src="images/biografia/0.jpg" className="img-fluid" alt="" loading="lazy" />
        <p>{t('about.irwin')}<br />
          {t('about.formiga.old')}<br />
          {t('about.jet')}<br />
          {t('about.papao.old')}<br />
        </p>

        <p>{t('about.debug.fbb')}</p>
        <BioImage src="images/biografia/1.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.after.six.months')}</p>
        <BioImage src="images/biografia/2.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.hiatus.period')}</p>
        <BioImage src="images/biografia/3.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.will.guitar')}</p>
        <BioImage src="images/biografia/4.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.between.2013.2015')}</p>

        <p>{t('about.papao.exit')}</p>
        <BioImage src="images/biografia/5.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.single.ride.album')}</p>
        <BioImage src="images/biografia/7.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.covid')}</p>

        <p>{t('about.farm')}</p>
        <BioImage src="images/biografia/8.jpg" className="img-fluid" alt="" loading="lazy"/>

        <p>{t('about.2025')}</p>

        <p>{t('about.actual')}</p>
        <AtualImage src="images/biografia/atual-2.jpg" className="img-fluid" alt="" loading="lazy" />

      </InnerAbout>

    </ContainerAbout>
  );
}

export default About;
