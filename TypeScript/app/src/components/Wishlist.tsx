import React from "react";
import Header from "./major/Header";
import BottomBar from "./major/BottomBar";
import Footer from "./major/Footer";



const Wishlist = () => {
    return (
        <>
        <Header />
            <BottomBar />
            <div className="breadcrumb-wrap">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Products</a></li>
                        <li className="breadcrumb-item active">Wishlist</li>
                    </ul>
                </div>
            </div>
            <div className="wishlist-page">
                <div className="container-fluid">
                    <div className="wishlist-page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Add to Cart</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src="img/product-6.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" value="1"/>
                                                        <button className="btn-plus"><i className="fa fa-plus"></i>
                                                        </button>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn-cart">Add to Cart</button>
                                            </td>
                                            <td>
                                                <button><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src="img/product-7.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" value="1"/>
                                                        <button className="btn-plus"><i className="fa fa-plus"></i>
                                                        </button>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn-cart">Add to Cart</button>
                                            </td>
                                            <td>
                                                <button><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src="img/product-8.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" value="1"/>
                                                        <button className="btn-plus"><i className="fa fa-plus"></i>
                                                        </button>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn-cart">Add to Cart</button>
                                            </td>
                                            <td>
                                                <button><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src="img/product-9.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" value="1"/>
                                                        <button className="btn-plus"><i className="fa fa-plus"></i>
                                                        </button>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn-cart">Add to Cart</button>
                                            </td>
                                            <td>
                                                <button><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src="img/product-10.jpg" alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <input type="text" value="1"/>
                                                        <button className="btn-plus"><i className="fa fa-plus"></i>
                                                        </button>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn-cart">Add to Cart</button>
                                            </td>
                                            <td>
                                                <button><i className="fa fa-trash"></i></button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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


export default Wishlist