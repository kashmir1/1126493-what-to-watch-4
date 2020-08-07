import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeout = null;
  }

  componentDidMount() {
    const {muted} = this.props;
    const video = this._videoRef.current;

    video.muted = muted;
  }

  componentDidUpdate() {
    const {src} = this.props;
    const video = this._videoRef.current;
    video.src = src;

    if (this.props.isPlaying) {
      this._timeout = setTimeout(() => video.play(), 1000);
    } else {
      clearTimeout(this._timeout);
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.muted = null;
    video.onplay = null;

    clearTimeout(this._timeout);
  }


  render() {
    const {poster} = this.props;

    return (
      <video width="280" height="175"
        poster={poster}
        ref={this._videoRef}
      >your browser doesn`t support embedded videos</video>
    );
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  muted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
