import React from "react";
import Header from "./major/Header";
import BottomBar from "./major/BottomBar";
import Footer from "./major/Footer";



const Checkout = (): JSX.Element => {
    return  (
        <>
            <Header />
            <BottomBar />
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">Checkout</li>
                    </ul>
                </div>
            </div>
            <div className="checkout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-inner">
                                <div className="billing-address">
                                    <h2>Billing Address</h2>
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
                                        <div className="col-md-12">
                                            <label>Address</label>
                                            <input className="form-control" type="text" placeholder="Address"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Country</label>
                                            <select className="custom-select">
                                                <option selected>United States</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label>City</label>
                                            <input className="form-control" type="text" placeholder="City"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>State</label>
                                            <input className="form-control" type="text" placeholder="State"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>ZIP Code</label>
                                            <input className="form-control" type="text" placeholder="ZIP Code"/>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                                    <label className="custom-control-label" htmlFor="newaccount">Create
                                                        an account</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="shipto"/>
                                                    <label className="custom-control-label" htmlFor="shipto">Ship to
                                                        different address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shipping-address">
                                    <h2>Shipping Address</h2>
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
                                        <div className="col-md-12">
                                            <label>Address</label>
                                            <input className="form-control" type="text" placeholder="Address"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Country</label>
                                            <select className="custom-select">
                                                <option selected>United States</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label>City</label>
                                            <input className="form-control" type="text" placeholder="City"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>State</label>
                                            <input className="form-control" type="text" placeholder="State"/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>ZIP Code</label>
                                            <input className="form-control" type="text" placeholder="ZIP Code"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout-inner">
                                <div className="checkout-summary">
                                    <h1>Cart Total</h1>
                                    <p>Product Name<span>$99</span></p>
                                    <p className="sub-total">Sub Total<span>$99</span></p>
                                    <p className="ship-cost">Shipping Cost<span>$1</span></p>
                                    <h2>Grand Total<span>$100</span></h2>
                                </div>

                                <div className="checkout-payment">
                                    <div className="payment-methods">
                                        <h1>Payment Methods</h1>
                                        <div className="payment-method">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="payment-1"
                                                       name="payment"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="payment-1">Paypal</label>
                                            </div>
                                            <div className="payment-content" id="payment-1-show">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                    tincidunt orci ac eros volutpat maximus lacinia quis diam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="payment-method">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="payment-2"
                                                       name="payment"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="payment-2">Payoneer</label>
                                            </div>
                                            <div className="payment-content" id="payment-2-show">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                    tincidunt orci ac eros volutpat maximus lacinia quis diam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="payment-method">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="payment-3"
                                                       name="payment"/>
                                                    <label className="custom-control-label" htmlFor="payment-3">Check
                                                        Payment</label>
                                            </div>
                                            <div className="payment-content" id="payment-3-show">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                    tincidunt orci ac eros volutpat maximus lacinia quis diam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="payment-method">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="payment-4"
                                                       name="payment"/>
                                                    <label className="custom-control-label" htmlFor="payment-4">Direct
                                                        Bank Transfer</label>
                                            </div>
                                            <div className="payment-content" id="payment-4-show">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                    tincidunt orci ac eros volutpat maximus lacinia quis diam.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="payment-method">
                                            <div className="custom-control custom-radio">
                                                <input type="radio" className="custom-control-input" id="payment-5"
                                                       name="payment"/>
                                                    <label className="custom-control-label" htmlFor="payment-5">Cash on
                                                        Delivery</label>
                                            </div>
                                            <div className="payment-content" id="payment-5-show">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                                    tincidunt orci ac eros volutpat maximus lacinia quis diam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-btn">
                                        <button>Place Order</button>
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

export default Checkout