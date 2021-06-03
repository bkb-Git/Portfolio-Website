import React from 'react';
import Home from './HomePage/Home';
import Projects from './ProjectsPage/Projects';
import About from './AboutPage/About';
import { Switch , Route} from 'react-router-dom';
import './app.css';
import './home.css';

function App() {
  return  (
    <div >
    <Switch>
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
    </div>
  )
}
 export default App;
    


