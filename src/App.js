import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="container-fluid">
      <Navigation/>
      <HomePage/>
    </div>
  );
}

export default App;
