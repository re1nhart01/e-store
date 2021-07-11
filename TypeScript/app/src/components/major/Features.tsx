import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import {Rating} from "semantic-ui-react";
import prod1 from "../../img/product-1.jpg"
import axios from "axios";


interface Features {
    category: number
    color: string
    discount: boolean
    images: string[]
    price: number
    quantity: number
    rating: number
    slug: string
    title: string
}


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 5
    }
}

const url = "http://127.0.0.1:8000/api/items/"

const Features = (): JSX.Element => {
const [apiData, setApiData]: [Features[], Function] = useState([])

async function fetchFeatures() {
    const response = await axios.get<Features[]>(url)
        .then(res => {
            console.log(res.data);
            setApiData(res.data);
        })
}

useEffect(() => {
    fetchFeatures();
},[])



//{title: "Tishka8", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 4}

//onRate={}

    const FeaturesList = () => {
        return apiData.map(el => {
       return ( <div className="col-lg-3">
            <div className="product-item">
                <div className="product-title">
                    <p>{el.title}</p>
                    <div className="ratting">
                        <Rating icon='star' defaultRating={el.rating} size='huge' maxRating={5} />
                    </div>
                </div>
                <div className="product-image">
                    <NavLink to={el.slug}>
                        <img src={prod1} alt="Product Image" />
                    </NavLink>
                    <div className="product-action">
                        <a href="#"><i className="fa fa-cart-plus"></i></a>
                        <a href="#"><i className="fa fa-heart"></i></a>
                        <a href="#"><i className="fa fa-search"></i></a>
                    </div>
                </div>
                <div className="product-price">
                    <h3><span>$</span>{el.price}</h3>
                    <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                </div>
            </div>
        </div>

       )
        })
    }


    return (
        <>
            <div className="featured-product product">
                <div className="container-fluid">
                    <div className="section-header">
                        <h1>Featured Product</h1>
                    </div>
                        <Carousel infinite={true} responsive={responsive}>
                            {FeaturesList()}
                        </Carousel>
                </div>
            </div>
        </>
    )
}

export default Features


//<Rating style={{backgroundColor: "#101010"}} icon='star' defaultRating={5} size='huge' maxRating={5}  onRate={ this.CheckRating }/>
