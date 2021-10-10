import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainArea from './components/MainArea';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar className="topbar" />
      <Navbar className="navbar" />
      <MainArea className="main" />
    </div>
  );
}

export default App;
