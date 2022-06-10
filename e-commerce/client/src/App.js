import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile.js';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <Navbar />
      <div id='content'>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:product_id" component={ProductDetail} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/basket" component={Basket} />
          <ProtectedRoutes path="/profile" component={Profile} />
          <ProtectedRoutes path="/admin" component={Admin} admin={true} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </div>
  );
}


export default App;
