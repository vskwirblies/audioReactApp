import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class SongList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      songs: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/songs?page=1')
    .then(response => response.json())
    .then(data => {
      this.setState({isLoading: false, songs: data});
    });
  }
  
  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }
    let tablerows = this.state.songs.map(song => {
      return (<tr><td><Link to={`/songs/${song.id}`} key={song.id}>
          {song.title}
        </Link></td></tr>);
    });
    return (
      <>
      <div className="header">
        <h1>SongList</h1>
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