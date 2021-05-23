import React, {Component} from 'react';
import {baseurl} from '../common/constants';

export default class ArtistDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      artist: null
    };
  }

  componentDidMount() {
    console.log(baseurl);
    fetch(baseurl + "/artists/" + this.props.match.params.id)
    .then(response => response.json())
    .then(data => {
      this.setState({isLoading: false, artist: data});
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }

    return (
      <>
      <div className="header">
        <h1>{this.state.artist.name}</h1>
      </div>
      <div className="details">
        <p>These are details about an artist.</p>
      </div>
      </>
    );
  }
}