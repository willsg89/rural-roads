import styled from 'styled-components';

const Video = styled.div`
  margin-bottom: ${props => (props.mb ? `30px` : `unset`)};
`;

const VideoFunc = ({mb, title, src, onClick}) => {

    return (<Video onClick={() => {console.log("sdsss"); onClick();}} className="embed-responsive embed-responsive-16by9" mb={mb}>
        <iframe title={title} className="embed-responsive-item" src={src} allowFullScreen></iframe>
    </Video>);
}

export default  VideoFunc;
