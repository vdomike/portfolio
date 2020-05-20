import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ProjectPage from './pages/Projectpage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/project/:id">
          <ProjectPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
