import React from "react";
import Header from "./major/Header";
import BottomBar from "./major/BottomBar";
import Footer from "./major/Footer";



const Contact = () => {
    return (
        <>
            <Header />
            <BottomBar />
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">Contact</li>
                    </ul>
                </div>
            </div>
            <div className="contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <h2>Our Office</h2>
                                <h3><i className="fa fa-map-marker"></i>123 Office, Los Angeles, CA, USA</h3>
                                <h3><i className="fa fa-envelope"></i>office@example.com</h3>
                                <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                                <div className="social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <h2>Our Store</h2>
                                <h3><i className="fa fa-map-marker"></i>123 Store, Los Angeles, CA, USA</h3>
                                <h3><i className="fa fa-envelope"></i>store@example.com</h3>
                                <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                                <div className="social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Your Name"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div>
                                        <button className="btn" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.24532098539802!3d34.05071312525937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2s123%20S%20Los%20Angeles%20St%2C%20Los%20Angeles%2C%20CA%2090012%2C%20USA!5e0!3m2!1sen!2sbd!4v1585634930544!5m2!1sen!2sbd"
                                    frameBorder="0" aria-hidden="false"
                                    ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Contact