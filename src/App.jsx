import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Vegetables from './components/Vegetables';
import Smartphones from './components/Smartphones';
import Laptops from './components/Laptops';


const App = () => {


  return (
    <div className="wrapper">

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
