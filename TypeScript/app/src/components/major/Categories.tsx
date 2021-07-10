import React from "react";



const Categories = (): JSX.Element => {
    return (
        <>
            <div className="category">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src="img/category-3.jpg"/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-250">
                                <img src="img/category-4.jpg"/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-150">
                                <img src="img/category-5.jpg"/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-150">
                                <img src="img/category-6.jpg"/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                            <div className="category-item ch-250">
                                <img src="img/category-7.jpg"/>
                                <a className="category-name" href="">
                                    <p>Some text goes here that describes the image</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="category-item ch-400">
                                <img src="img/category-8.jpg"/>
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