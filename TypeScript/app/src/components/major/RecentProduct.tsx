import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";
import {Rating} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import prod1 from "../../img/product-1.jpg";

interface Recent {
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

const RecentProduct = (): JSX.Element => {


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


    const [apiData, setApiData]: [Recent[], Function] = useState([])
    const url = "http://127.0.0.1:8000/api/items/"
    async function fetchFeatures() {
        const response = await axios.get<Recent[]>(url)
            .then(res => {
                console.log(res.data);
                setApiData(res.data);
            })
    }

    useEffect(() => {
        fetchFeatures();
    },[])

    const RecentList = () => {
        return apiData.map(el => {
        return (
            <div className="col-lg-3">
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
            <div className="recent-product product">
                <div className="container-fluid">
                    <div className="section-header">
                        <h1>Recent Product</h1>
                    </div>
                    <Carousel infinite={true} responsive={responsive}>
                        {RecentList()}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default RecentProduct