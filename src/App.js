import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import the component
import CreateProduct from './components/createProduct.component';
import EditProduct from './components/editProduct.component';
import ProductDetails from './components/productDetails.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/createProduct'} className="nav-link">Create Product</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/productDetails'} className="nav-link">Manage Products</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/createProduct' component={ CreateProduct } />
              <Route path='/editProduct/:id' component={ EditProduct } />
              <Route path='/productDetails' component={ ProductDetails } />
          </Switch>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;
