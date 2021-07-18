import React from "react"
import { NavLink } from "react-router-dom"


interface IProps {

}


const Header: React.FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <React.Fragment>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope"></i>
                            support@email.com
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt"></i>
                            +012-345-6789
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                                data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                <NavLink to="/product-list" className="nav-item nav-link">Products</NavLink>
                                <NavLink to="/billing" className="nav-item nav-link">Checkout</NavLink>
                                <NavLink to="/account" className="nav-item nav-link">My Account</NavLink>
                            </div>
                            <div className="navbar-nav ml-auto">
                                        <NavLink to="/authorization" className="nav-item nav-link">Login</NavLink>
                                        <NavLink to="/authorization" className="nav-item nav-link">Register</NavLink>
                                <NavLink to="/contacts" className="nav-item nav-link">Contact Us</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Header