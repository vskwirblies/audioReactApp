import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SongDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      song: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/songs/" + this.props.match.params.id)
    .then(response => response.json())
    .then(data => {
      this.setState({isLoading: false, song: data});
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }

    // console.log(this.props.changeCurrentlyPlaying);
    const btn = <button onClick={() => this.props.changeCurrentlyPlaying(this.state.song.id)}><FontAwesomeIcon icon={["fas", "play"]} /></button>;
    // const btn = <button></button>

    return (
      <>
      <div className="header">
        <h1>{this.state.song.title}</h1>
        <p>{this.state.song.artist}</p>
        {btn}
      </div>
      <div className="details">
        <p>These are details about a song.</p>
      </div>
      
      </>
    );
  }
}