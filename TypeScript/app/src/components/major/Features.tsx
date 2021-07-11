import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import {Rating} from "semantic-ui-react";
import prod1 from "../../img/product-1.jpg"

interface Feature {
    title: string,
    rating: number,
    price: number,
    img: string,
    url: string,
    id: number
}


const Features = (): JSX.Element => {

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


    const Feat: Feature[] = [
        {title: "Tishka1", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 1},
        {title: "Tishka2", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 2},
        {title: "Tishka3", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 3},
        {title: "Tishka4", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 4},
        {title: "Tishka5", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 1},
        {title: "Tishka6", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 2},
        {title: "Tishka7", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 3},
        {title: "Tishka8", rating: 4, price: 154, img: prod1, url: "product#item/1", id: 4},
    ]


//onRate={}

    const FeaturesList = () => {
        return Feat.map(el => {
       return ( <div className="col-lg-3">
            <div className="product-item">
                <div className="product-title">
                    <p>{el.title}</p>
                    <div className="ratting">
                        <Rating icon='star' defaultRating={el.rating} size='huge' maxRating={5} />
                    </div>
                </div>
                <div className="product-image">
                    <NavLink to={el.url}>
                        <img src={el.img} alt="Product Image" />
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
