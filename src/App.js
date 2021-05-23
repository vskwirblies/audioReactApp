import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';
import AudioPlayer from './components/AudioPlayer';
import SongList from './components/SongList';
import SongDetails from './components/SongDetails';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import './css/layout/nav.css';
import './css/layout/contentArea.css';
import './css/layout/footer.css';

library.add(fas);

export default class App extends React.Component {

  state = {
    currentlyPlaying: 3
  }

  constructor(props) {
    super(props);
    this.changeCurrentlyPlaying = this.changeCurrentlyPlaying.bind(this);
  }

  render() {

    return (
      <div className="app">
        <Router>
          <nav className="nav">
            <ul>
              <li><Link to="/audiobooks">audiobooks</Link></li>
              <li><Link to="/songs">songs</Link></li>
            </ul>
          </nav>
          <main className="contentArea">
              <Switch>
                <Route path="/audiobooks/:id" component={AudiobookDetails} />
                <Route path="/audiobooks">
                  <AudiobookList/>
                </Route>
                <Route path="/songs/:id" exact render={(props) => <SongDetails {...props} changeCurrentlyPlaying={this.changeCurrentlyPlaying}/>} />
                <Route path="/songs">
                  <SongList/>
                </Route>
                <Route path="/">
                  <AudiobookList/>
                </Route>
              </Switch>
          </main>
          <AudioPlayer currentlyPlaying={this.state.currentlyPlaying}/>
          <footer className="footer">
            <p>Made in Bremen.</p>
          </footer>
        </Router>
      </div>
    );
  }

  changeCurrentlyPlaying(newValue) {
    this.setState({
      currentlyPlaying: newValue
    });
  }
}
