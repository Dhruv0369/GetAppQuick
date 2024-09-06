
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PopularApps from './components/PopularApps';
import Topgame from './components/Topgame';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Topgame/>
      <PopularApps/>
      <Footer/>
    </div>
  );
}

export default App;
