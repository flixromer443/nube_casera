import './css/App.css';
import NavBar from './components/NavBar';
import BottomNavBar from './components/BottomNavBar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import Archivos from './pages/Archivos';
import Fotos from './pages/Fotos';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/archivos' element={<Archivos/>} />
          <Route path='/fotos' element={<Fotos/>} />
        </Routes>
        
      </header>
      <BottomNavBar/>
    </div>
  );
}

export default App;
