import './App.css';
import {Navbar, Sidebar, Footer} from './components';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screen/Home';
import About from './screen/About';
import Contact from './screen/Contact';
import SingleCocktail from './screen/SingleCocktail';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contatti' element={<Contact />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
