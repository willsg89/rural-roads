
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { useTranslation } from "react-i18next";

import Home from 'views/main'
import Videos from 'views/videos'
import Contact from 'views/contact'
import About from 'views/about'
import Container from 'components/Container';

import styled from 'styled-components';
import i18n from 'i18nConfig';
import firebase from "firebase/app";

const StyledNavbar = styled(Navbar)`
  background-color: #e8af10;
  font-family: 'Gunplay', sans-serif;
  font-size: large;
`;

const StyledBrand = styled(Navbar.Brand)`
  font-family: SprayMeFont, 'Gunplay', sans-serif;
  font-size: xx-large;
  padding: 0;
`;

const BrandImg = styled.img`
  margin-right: 5px;
  width: 40px;
  height: 40px;
`;

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  firebase.analytics().logEvent(`change_language_to_${lng}`);
}

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <StyledNavbar expand="md" fixed="top" collapseOnSelect >
        <LinkContainer exact  to="/">
          <StyledBrand >
            <BrandImg src="/images/logo.svg" alt="" />
            RURAL ROADS
          </StyledBrand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link active={false} >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/about">
              <Nav.Link active={false} > {t('menu.about')}</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/videos">
              <Nav.Link active={false} > {t('menu.videos')}</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/contact">
              <Nav.Link active={false} > {t('menu.contact')}</Nav.Link>
            </LinkContainer>

          </Nav>
          <Nav>
            <Nav.Link></Nav.Link>
            {i18n.language.split("-").[0] !== 'pt' ? <Nav.Link  onClick={() => changeLanguage('pt')}>Português</Nav.Link> : null}
            {i18n.language.split("-").[0] === 'pt' ? <Nav.Link  onClick={() => changeLanguage('en')}>English</Nav.Link> : null}
          </Nav>
        </Navbar.Collapse>

      </StyledNavbar>

      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>

    </Router>
  );
}

export default App;
