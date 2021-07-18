import React, {ReactNode} from "react"
import {ReactComponent} from "*.svg";
import Carousel from "./components/Carousel";
import {Route} from "react-router-dom";
import General from "./components/General";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Account from "./components/Account";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";
import Wishlist from "./components/Wishlist";



export function Routing(Component: ReactNode) {
    return Component
}

export function Component(): JSX.Element {
    return (
        <>
            <Route exact path="/" component={General} />
            <Route exact path="/authorization" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/billing" component={Checkout} />
            <Route exact path="/contacts" component={Contact} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/product#item" component={ProductItem} />
            <Route exact path="/product-list" component={ProductList} />
            <Route exact path="/wish" component={Wishlist} />
        </>
    )
}