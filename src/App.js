import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";

import Home from "./views/main";
import VideosLyric from "./views/videosLyric";
import VideosQuarantine from "./views/videosQuarantine";
import VideosAnniversary from "./views/videosAnniversary";
import VideosFarm from "./views/videosFarmSession";
import Contact from "./views/contact";
import About from "./views/about";
import Container from "./components/Container";

import styled from "styled-components";
import i18n from "./i18nConfig";
import { analytics, logEvent } from "./firebaseConfig";

const StyledNavbar = styled(Navbar)`
  background-color: #2e2e2e;
  font-family: "Gunplay", sans-serif;
  font-size: large;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledBrand = styled(Navbar.Brand)`
font-family: "Gunplay", sans-serif;
text-shadow: 2px 2px #000000;
padding: 0;
display: flex;
align-items: center;
color: rgba(255,255,255,1) !important;
// color: rgba(163,60,44,1) !important;
`;

const StyledNavDropdown  = styled(NavDropdown)`
.dropdown-menu {
  background-color: #2e2e2e;
}
.nav-link {
  color: rgba(255,255,255, 0.8) !important;
}
&:hover .dropdown-toggle {
  color: rgba(255,255,255) !important;
}
`;

const StyledNavLink  = styled(Nav.Link)`
&.nav-link {
  color: rgba(255,255,255, 0.8) !important;
}
&:hover.nav-link {
  color: rgba(255,255,255) !important;
}
&.active {
  color: rgba(255,255,255) !important;
}
`;

const StyledNavDropdownItem  = styled(NavDropdown.Item)`
  &.active {
    color: rgba(255,255,255);
    background-color: unset;
  }
  color: rgba(255,255,255, 0.8);
  &:hover {
    color: rgba(255,255,255);
    background-color: unset;
  }
`;

const StyledNavBarToggle  = styled(Navbar.Toggle)`
border-color: rgba(255,255,255, 0.9) !important;
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
`;

const BrandImg = styled.img`
  margin-right: 5px;
  width: 32px;
  height: 32px;
`;

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  logEvent(analytics, `change_language_to_${lng}`);
};

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <StyledNavbar expand="md" fixed="top" collapseOnSelect>
        <LinkContainer to="/">
          <StyledBrand>
            <BrandImg src="/logo76.png" alt="" />
            RURAL ROADS
          </StyledBrand>
        </LinkContainer>

        <StyledNavBarToggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <StyledNavLink active={false}>Home</StyledNavLink>
            </LinkContainer>
            <LinkContainer to="/about">
              <StyledNavLink active={false}> {t("menu.about")}</StyledNavLink>
            </LinkContainer>

            <StyledNavDropdown title={t("menu.videos")} id="basic-nav-dropdown">
              <LinkContainer to="/videos-farm">
                <StyledNavDropdownItem active={false} >{t("menu.videos.farm")} </StyledNavDropdownItem>
              </LinkContainer>
              <LinkContainer to="/videos-lyric">
                <StyledNavDropdownItem active={false} >{t("menu.videos.lyric")} </StyledNavDropdownItem>
              </LinkContainer>
              <LinkContainer to="/videos-quarantine">
                <StyledNavDropdownItem active={false} >{t("menu.videos.quarantine")} </StyledNavDropdownItem>
              </LinkContainer>
              <LinkContainer to="/videos-anniversary">
                <StyledNavDropdownItem active={false} >{t("menu.videos.anniversary")} </StyledNavDropdownItem>
              </LinkContainer>
            </StyledNavDropdown>
            <LinkContainer to="/contact">
              <StyledNavLink active={false}> {t("menu.contact")}</StyledNavLink>
            </LinkContainer>
          </Nav>
          <Nav>
            <StyledNavLink></StyledNavLink>
            {i18n.language.split("-")[0] !== "pt" ? (
              <StyledNavLink onClick={() => changeLanguage("pt")}>
                Português
              </StyledNavLink>
            ) : null}
            {i18n.language.split("-")[0] === "pt" ? (
              <StyledNavLink onClick={() => changeLanguage("en")}>English</StyledNavLink>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>

      <Container>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/videos-farm" element={<VideosFarm />} />
          <Route path="/videos-lyric" element={<VideosLyric />} />
          <Route path="/videos-quarantine" element={<VideosQuarantine />} />
          <Route path="/videos-anniversary" element={<VideosAnniversary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
