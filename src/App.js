
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
              <div id="topanchor"></div>

          <Navbar />
      <div className="home">
        <div className="layout-maxbox">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
