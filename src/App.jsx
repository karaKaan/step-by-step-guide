import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Product from './pages/products/Product';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/shop" component={Shop}/>
      <Route path="/product" component={Product}/>
    </Router>
  );
}

export default App;
