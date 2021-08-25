import { BrowserRouter as Router, Switch, Route} from 
'react-router-dom'
import './App.css';

import  Navbar from './components/Navbar';
import  Sidebar from './components/Sidebar';
import  Footer from './components/Footer';

import { Home , SingleProduct, Cart, Checkout, Error, About, Products} from './pages';


function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
        <Sidebar/>
          <Route exact path = '/'>
            <Home/>
          </Route>

          <Route exact path = '/about'>
            <About/>
          </Route>

          <Route exact path = '/cart'>
            <Cart/>
          </Route>

          <Route exact path = '/products'>
            <Products/>
          </Route>

          <Route exact path = '/products/:id' children = {<SingleProduct/>} />

          <Route exact path = '/checkout'>
            <Checkout/>
          </Route>

          <Route exact path = '*'>
            <Error/>
          </Route>

        </Switch>
      <Footer/>  
    </Router>
  );
}

export default App;
