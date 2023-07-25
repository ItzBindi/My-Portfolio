
import Nav from './components/navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal1 from './components/Modal1';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import Modal4 from './components/Modal4';
import Modal5 from './components/Modal5';
import Modal6 from './components/Modal6';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
   

    <div className="App">
   <Nav />
   <Header />
   {/* router */}
   <Routes>
    <Route 
    path="/About"
    element={<About />}
    />
    <Route
    path="/Portfolio"
    element={
      <>
    <Portfolio /> 
    <Modal1 />
    <Modal2 />
    <Modal3 />
    <Modal4 />
    <Modal5 />
    <Modal6 />
    </>
    }
    />
    <Route
    path="/contact"
    element={<Contact />}
    />
    
    <Route
    path="/Resume"
    element={<Resume />}
    />

    

    </Routes>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
