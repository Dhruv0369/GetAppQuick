
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div id="topanchor"></div>
      <div className="home">
        <div className="layout-maxbox">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
