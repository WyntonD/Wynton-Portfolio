import { BrowserRouter as Router,
        NavLink, 
        Switch,
        Route
        } from 'react-router-dom';
import Nav from './components/Nav/nav';
import TopHeader from './components/TopHeader/topheader';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Resume from './pages/Resume/resume';
import Skills from './pages/Skillset/skills';
import Projects from './pages/Projects/projects';
import Contact from './pages/Contact/contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <TopHeader />
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
