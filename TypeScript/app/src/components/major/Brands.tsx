import React from "react";
import brand1 from "./../../img/brand-1.png"
import brand2 from "./../../img/brand-2.png"
import brand3 from "./../../img/brand-3.png"
import brand4 from "./../../img/brand-4.png"
import brand5 from "./../../img/brand-5.png"
import brand6 from "./../../img/brand-6.png"
import Carousel from "react-multi-carousel";



const Brands = (): JSX.Element => {

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

const brandData = [
    brand1, brand2,brand3, brand4,brand5, brand6
]

    const BrandList = () => {
        return brandData.map(el => {
 return (
     <div className="brand-item"><img src={el} alt="brand"/></div>
         )
        })
    }



    return (
        <>
            <div className="brand">
                <div className="container-fluid">
                    <Carousel infinite={true} responsive={responsive} autoPlay autoPlaySpeed={3000} arrows={false}>
                        {BrandList()}
                    </Carousel>
                </div>
            </div>

            <div className="feature">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fab fa-cc-mastercard"></i>
                                <h2>Secure Payment</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-truck"></i>
                                <h2>Worldwide Delivery</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-sync-alt"></i>
                                <h2>90 Days Return</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-col">
                            <div className="feature-content">
                                <i className="fa fa-comments"></i>
                                <h2>24/7 Support</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur elit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Brands