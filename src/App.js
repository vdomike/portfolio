import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Homepage from './pages/Homepage';
import ProjectPage from './pages/Projectpage';

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              timeout={450}
              classNames="fade-page"
              key={location.key}
            >
              <Switch location={location}>
                <Route path="/project/:id" component={ProjectPage} />
                <Route path="/" component={Homepage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
