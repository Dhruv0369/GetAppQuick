import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllApps from './components/AllApps';
import Games from './components/Games';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="topanchor"></div>
        <div className="home">
          <div className="layout-maxbox">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<AllApps />} />
              <Route path="/games" element={<Games />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
