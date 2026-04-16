import styled from 'styled-components';

const Video = styled.div`
  margin-bottom: ${props => (props.$mb ? `30px` : `unset`)};
`;

const VideoFunc = ({mb, title, src, onClick}) => {
    return (<Video onClick={() => { onClick(); }} className="ratio ratio-16x9" $mb={mb}>
        <iframe title={title} src={src} allowFullScreen></iframe>
    </Video>);
}

export default VideoFunc;
