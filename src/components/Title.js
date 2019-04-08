import styled from 'styled-components';
import PropTypes from 'prop-types'

const TitleStyled = styled.h1`
  text-transform: ${props => (props.uppercase ? `uppercase` : `unset`)};
  font-family: 'Gunplay', sans-serif;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

function Title({children, uppercase}) {
  return (<TitleStyled className="col-12" uppercase={uppercase}>
    {children}
  </TitleStyled>);
};

Title.propTypes = {
  uppercase: PropTypes.bool
}

Title.defaultProps = {
  uppercase: true
};

export default Title;