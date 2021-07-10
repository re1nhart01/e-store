import React from "react";
import Header from "./major/Header";
import Footer from "./major/Footer";
import BottomBar from "./major/BottomBar";




const Authorization = (): JSX.Element => {
    return (
        <>
        <Header />
            <BottomBar />
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">Login & Register</li>
                    </ul>
                </div>
            </div>
            <div className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="register-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                        <input className="form-control" type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Last Name"</label>
                                        <input className="form-control" type="text" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input className="form-control" type="text" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input className="form-control" type="text" placeholder="Mobile No"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input className="form-control" type="text" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Retype Password</label>
                                        <input className="form-control" type="text" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>E-mail / Username</label>
                                        <input className="form-control" type="text" placeholder="E-mail / Username"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input className="form-control" type="text" placeholder="Password"/>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                                <label className="custom-control-label" htmlFor="newaccount">Keep me signed in</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Authorization