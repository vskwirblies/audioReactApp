import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {baseurl} from '../common/constants';
import '../css/components/AudiobookList.css';

export default class AudiobookList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      artists: []
    };
  }

  componentDidMount() {
    fetch(baseurl + '/artists')
    .then(response => response.json())
    .then(data => {
      this.setState({isLoading: false, artists: data});
    });
  }
  
  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }
    let tablerows = this.state.artists.map(artist => {
      return (<tr><td><Link to={`/artists/${artist.id}`} key={artist.id}>
          {artist.name}
        </Link></td></tr>);
    });
    return (
      <>
      <div className="header">
        <h1>ArtistList</h1>
      </div>
      <div className="details">
      <table className="table center">
        <thead>
          <th>Title</th>
        </thead>
        <tbody>
          {tablerows}
        </tbody>
      </table>
      </div>
      </>);
  }
}