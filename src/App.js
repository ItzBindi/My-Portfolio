
import Nav from './components/navbar';
import Header from './components/Header';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
   <Nav />
   <Header />
   {/* router */}
    <Route path="/about" component={About} />
   
    </div>
    </Router>
  );
}

export default App;
