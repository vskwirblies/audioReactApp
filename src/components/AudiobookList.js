import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { baseurl } from '../common/constants';
import '../css/components/AudiobookList.css';

export default class AudiobookList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      audiobooks: []
    };
  }

  componentDidMount() {
    fetch(baseurl + '/audiobooks')
    .then(response => response.json())
    .then(data => {
      this.setState({isLoading: false, audiobooks: data});
    });
  }
  
  render() {
    if (this.state.isLoading) {
      return <p>loading...</p>;
    }
    let tablerows = this.state.audiobooks.map(audiobook => {
      return (<tr><td><Link to={`/audiobooks/${audiobook.id}`} key={audiobook.id}>
          {audiobook.title}
        </Link></td></tr>);
    });
    return (
      <>
      <div className="header">
        <h1>AudiobookList</h1>
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