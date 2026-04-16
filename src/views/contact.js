import { useTranslation } from "react-i18next";
import Title from '../components/Title';
import styled from 'styled-components';
import { analytics, logEvent } from '../firebaseConfig';

const SocialImg = styled.img`
  height: 40px;
`;

const Text = styled.p`
  color: white;
`;

const Div30 = styled.div`
  margin-bottom: 30px;
`;

const DivSocial = styled.div`
  display: flex;
  justify-content: left;
`;

const DivWhats = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkMargin = styled.a`
  margin-right:20px;
`;

const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const LinkRR = styled.a`
  color: #d3d805;
`;

function Contact() {
    const { t } = useTranslation();
    logEvent(analytics, 'contact_load');

    return (
        <ContainerAbout>

            <Title>{t('contact.title')}</Title>

            <div className="inner-content about">

                <Div30>
                    <Text>{t('contact.email')}</Text>
                    <LinkRR onClick={() => logEvent(analytics, 'contact_mail_click')} href="mailto:ruralroadsbanda@gmail.com">
                        ruralroadsbanda@gmail.com
                    </LinkRR>
                </Div30>

                <Div30>
                    <Text>{t('contact.social')}</Text>
                    <DivSocial>
                        <LinkMargin onClick={() => logEvent(analytics, 'contact_facebook_click')} href="https://facebook.com/RuralRoadsBand" target="_blank" rel="noreferrer" >
                            <SocialImg className="mx-auto d-block" src="images/facebook.svg?sanitize=true" alt="Facebook" loading="lazy"/>
                        </LinkMargin>
                        <a onClick={() => logEvent(analytics, 'contact_instagram_click')} href="https://instagram.com/RuralRoadsBand" target="_blank" rel="noreferrer" >
                            <SocialImg className="mx-auto d-block" src="images/instagram.svg?sanitize=true" alt="Instagram" loading="lazy"/>
                        </a>
                    </DivSocial>
                </Div30>

                <Div30>
                    <Text>{t('contact.whats')}</Text>
                    <DivWhats>
                        <LinkRR onClick={() => logEvent(analytics, 'contact_cel_formiga_click')} href="tel:+5551993982897">
                            +55 (51) 99398-2897 (Formiga)
                        </LinkRR>
                        <LinkRR onClick={() => logEvent(analytics, 'contact_cel_will_click')} href="tel:+5551991374096">
                            +55 (51) 99137-4096 (Will)
                        </LinkRR>
                    </DivWhats>
                </Div30>

            </div>

        </ContainerAbout>
    );
}

export default Contact;
