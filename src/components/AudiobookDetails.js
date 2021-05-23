import React, {Component} from 'react';
import {baseurl} from '../common/constants';

export default class AudiobookDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      audiobook: null
    };
  }

  componentDidMount() {
    fetch(baseurl + "/audiobooks/" + this.props.match.params.id)
    .then(response => response.json())
    .then(data => {
      this.setState({isLoading: false, audiobook: data});
    });
  }

  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }

    return (
      <>
      <div className="header">
        <h1>{this.state.audiobook.title}</h1>
        <p>{this.state.audiobook.author}</p>
      </div>
      <div className="details">
        <p>These are details about an audiobook.</p>
      </div>
      </>
    );
  }
}