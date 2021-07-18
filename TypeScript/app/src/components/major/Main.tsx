import React, {useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Carousel from "../Carousel";
import cat1 from "./../../img/category-1.jpg"
import cat2 from "./../../img/category-2.jpg"
import context from "../../context";



interface Category {
    title: string,
    id: number
    description: string,
    iconClassList: string
}

const url: string = "http://127.0.0.1:8000/api/categories"
const Main = (): JSX.Element => {
const [apiData, setApiData]: [Category[], Function] = useState([]);
const state = useContext(context)
    console.log(state, 54);
   async function fetchCategory() {
        const response = await axios.get(url)
            .then(res => {
                setApiData(res.data);
                console.log(apiData)
            })
    }
    
    useEffect(() => {
        fetchCategory();

    }, [])

//{title: "Fashion & Beauty", id: 4, description: "/product#list/Home", iconClassList: "fa fa-female"}

const CategoryList = () => {
    return apiData.map(el => {
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
                                <Carousel />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src={cat1}/>
                                    <a className="img-text" href="">
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src={cat2}/>
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