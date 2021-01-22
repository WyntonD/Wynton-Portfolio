import { BrowserRouter as Router,
        NavLink, 
        Switch,
        Route
        } from 'react-router-dom';

import Nav from './components/Nav/nav';
import TopHeader from './components/TopHeader/topheader';     
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <Nav/>
        <Switch>
          <Route exact path="/home" component={} />
          <Route exact path="/about" component={} />
          <Route exact path="/resume" component={} />
          <Route exact path="/skills" component={} />
          <Route exact path="/projects" component={} />
          <Route exact path="/contact" component={} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
