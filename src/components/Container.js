import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const ContainerFunc = (props) => {
    return (<StyledContainer>
        {props.children}
    </StyledContainer>);
};

export default ContainerFunc;
