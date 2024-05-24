import { BrowserRouter } from 'react-router-dom';
import { Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import ProductCreation from './pages/ProductCreation';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/create' element={<ProductCreation/>} />
        <Route path='/product/:productId' element={<ProductPage/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;
