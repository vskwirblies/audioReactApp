import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/components/AudioPlayer.css';


export default class AudiobookList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPlaying: false,
      audios: []
    };

    this.audioRef = React.createRef();
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentlyPlaying !== this.props.currentlyPlaying) {
      this.play();
    }
  }
  
  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }

    const playPauseIcon = this.state.isPlaying ? <FontAwesomeIcon icon={["fas", "pause"]} /> : <FontAwesomeIcon icon={["fas", "play"]} />;
    const playPauseButton = this.state.isPlaying ? <button onClick={this.pause}>{playPauseIcon}</button> : <button onClick={this.play}>{playPauseIcon}</button>;
    const source = `http://localhost:8080/songs/${this.props.currentlyPlaying}/stream`;

    return (
      <>
      <div>
        {playPauseButton}
        <audio src={source} ref={this.audioRef} controls autoplay>
        </audio>
      </div>
      </>);
  }

  pause() {
    this.audioRef.current.pause();
    this.setState({isPlaying: false});
  }

  play() {
    this.audioRef.current.play();
    this.setState({isPlaying: true});
  }
}