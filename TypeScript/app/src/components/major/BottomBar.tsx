import React from "react"
import { Link, NavLink } from "react-router-dom"
import Logo from "./../../img/logo.png"


interface IProps {

}

const BottomBar: React.FC<IProps> = (props: IProps): JSX.Element  =>{
    return (
        <React.Fragment>
            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <NavLink to="/wish" className="btn wishlist">
                                    <i className="fa fa-heart"></i>
                                    <span>(0)</span>
                                </NavLink>
                                <NavLink to="/cart" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default BottomBar