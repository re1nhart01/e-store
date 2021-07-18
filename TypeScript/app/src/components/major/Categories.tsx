import React from "react";
import cat3 from "./../../img/category-3.jpg"
import cat4 from "./../../img/category-4.jpg"
import cat5 from "./../../img/category-5.jpg"
import cat6 from "./../../img/category-6.jpg"
import cat7 from "./../../img/category-7.jpg"
import cat8 from "./../../img/category-8.jpg"


const Categories = (): JSX.Element => {
    return (
        <>
            <div className="category">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src={cat3}/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-250">
                                <img src={cat4}/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-150">
                                <img src={cat5}/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-150">
                                <img src={cat6}/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-250">
                                <img src={cat7}/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src={cat8}/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Categories