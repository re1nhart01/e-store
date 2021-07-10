import React from "react";



const Brands = (): JSX.Element => {
    return (
        <>
            <div className="brand">
                <div className="container-fluid">
                    <div className="brand-slider">
                        <div className="brand-item"><img src="img/brand-1.png" alt=""/></div>
                        <div className="brand-item"><img src="img/brand-2.png" alt=""/></div>
                        <div className="brand-item"><img src="img/brand-3.png" alt=""/></div>
                        <div className="brand-item"><img src="img/brand-4.png" alt=""/></div>
                        <div className="brand-item"><img src="img/brand-5.png" alt=""/></div>
                        <div className="brand-item"><img src="img/brand-6.png" alt=""/></div>
                    </div>
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