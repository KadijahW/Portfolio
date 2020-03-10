import React from 'react';
import './App.css';
import Nav from'./Componenets/Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from './Componenets/Footer'

library.add(faGithub, faLinkedin)


function App() {
  return (
    <div className="App">
     <Nav />

     <Footer />
    </div>
  );
}

export default App;
