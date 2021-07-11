import React from "react";
import { NavLink } from "react-router-dom";



interface Category {
    title: string,
    id: number
    category_url: string,
    iconClassList: string
}


const Main = (): JSX.Element => {


    const Cat: Category[] = [
        {title: "Home", id: 1, category_url: "/product#list/Home", iconClassList: "fa fa-home"},
        {title: "Best Selling", id: 2, category_url: "/product#list/BestSelling", iconClassList: "fa fa-shopping-bag"},
        {title: "New Arrivals", id: 3, category_url: "/product#list/Home", iconClassList: "fa fa-plus-square"},
        {title: "Fashion & Beauty", id: 4, category_url: "/product#list/Home", iconClassList: "fa fa-female"},
    ]

const CategoryList = () => {
    return Cat.map(el => {
        return (
            <li className="nav-item">
                <NavLink className="nav-link" to="/product#list"><i className={el.iconClassList}></i>{el.title}</NavLink>
            </li>
        )
    })
}






    return (
        <>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    {CategoryList()}
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-6">
                            <div className="header-slider normal-slider">
                                <div className="header-slider-item">
                                    <img src="img/slider-1.jpg" alt="Slider Image"/>
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                    </div>
                                </div>
                                <div className="header-slider-item">
                                    <img src="img/slider-2.jpg" alt="Slider Image"/>
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                    </div>
                                </div>
                                <div className="header-slider-item">
                                    <img src="img/slider-3.jpg" alt="Slider Image"/>
                                    <div className="header-slider-caption">
                                        <p>Some text goes here that describes the image</p>
                                        <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src="img/category-1.jpg"/>
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src="img/category-2.jpg"/>
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Main