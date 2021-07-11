import React from 'react';
import './App.css';
import General from "./components/General";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Account  from "./components/Account";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";
import { Route } from 'react-router-dom';


interface IProps {}
interface IState {}

class App extends React.Component<IProps, IState> {


  render(): JSX.Element {
  return (
      <div>
          <Route exact path="/" component={General} />
          <Route exact path="/authorization" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/billing" component={Checkout} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/product#item" component={ProductItem} />
          <Route exact path="/product#list" component={ProductList} />
          <Route exact path="/wish" component={Wishlist} />
      </div>
  )
  }
}
export default App;

