{/* <ImageLink
            href="https://open.spotify.com/artist/0Hjg5nGXnQ561j4Wm444D5"
            src="images/spotify.svg?sanitize=true"
            alt="Spotify"
            aClass="offset-lg-2 col-lg-2 col-3"
            imgClass="social-bar" />
          <ImageLink
            href="https://itunes.apple.com/us/artist/1441140961"
            src="images/itunes.svg?sanitize=true"
             alt="Apple Music" 
            aClass="col-lg-2 col-3"
            imgClass="social-bar" />
          <ImageLink
            href="https://music.youtube.com/channel/UChnPv1pLuPd1aZE7Q4qo0Gw"
            src="images/youtube-music.svg?sanitize=true" 
            alt="Youtube Music"
            aClass="col-lg-2 col-3"
            imgClass="social-bar" />
          <ImageLink
            href="https://www.deezer.com/br/album/79699542"
            src="images/deezer.svg?sanitize=true"
            alt="Deezer"
            aClass="col-lg-2 col-3"
            imgClass="social-bar" /> */}

const ImageLink = (props) => {
  return (<a href={props.href} className={props.aClass} target="_blank" rel="noreferrer" >
    <img className={`mx-auto d-block ${props.imgClass}`} src={props.src} alt={props.alt} />
  </a>);
}

export default ImageLink;

