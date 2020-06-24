import React from 'react';
import './App.css';
import Nav from'./Componenets/Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Footer from './Componenets/Footer'
import Home from './Componenets/Home'
import About from './Componenets/About'
import Projects from './Componenets/Projects'
import { Switch, Route } from 'react-router-dom';

library.add(faGithub, faLinkedin)


function App() {
  return (
    <div className="App">
     <Nav />

     <Switch>/
     <Route exact path ="/" component={Home} /> 
     <Route exact path ="/About" component={About} />
     <Route exact path ="/Projects" component={Projects} /> 
     </Switch>


     <Footer />
    </div>
  );
}

export default App;
