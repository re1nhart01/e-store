import React from 'react';
import './App.css';
import General from "./components/General";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Header from "./components/major/Header";
import BottomBar from "./components/major/BottomBar";
import Footer from "./components/major/Footer";
import Account  from "./components/Account";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";


interface IProps {}
interface IState {}

class App extends React.Component<IProps, IState> {


  render(): JSX.Element {
  return (
      <div>
<Wishlist />
      </div>
  )
  }
}

export default App;
 //<General />
// <Login />
//<Cart />
//<Checkout />
//<Contact />
// <Account />
//<ProductItem />
//<ProductList />
