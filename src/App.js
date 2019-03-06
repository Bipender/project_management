import React, { Component } from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import ProjectDetail from './components/project_detail/project-detail';
import TeamDetail from './components/team_detail/team-detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Project Management</h1>
        <h4>Below is the demonstration of SPA with ReactJs.</h4>
        <p>In SPA Application the view will change without refreshing whole Web Application.</p>
        <div className="spa">
          <BrowserRouter>
            <div>
              <Route exact path="/" component={ProjectDetail}/>
              <Route path="/teamDetail" component={TeamDetail}/>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
