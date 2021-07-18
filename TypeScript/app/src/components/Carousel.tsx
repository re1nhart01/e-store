import React, {useReducer, useState} from "react"
import {Divider, Transition} from "semantic-ui-react";
import img1 from "./../img/slider-1.jpg"
import img2 from "./../img/slider-2.jpg"
import img3 from "./../img/slider-3.jpg"


interface IProps {}
const SliderData = [img1, img2, img3]


const Carousel: React.FC<IProps> = (props): JSX.Element => {
let [carouselIndex, setIndex] = useState(1);

    const renderButton = () => {
        return SliderData.map((e: string, index: number) => {
            const active = index === carouselIndex ? 'active' : '';
                return <button style={{backgroundColor: "black"}}  type="button" onClick={() => {setIndex(index)}} data-bs-target="#carouselExampleIndicators" className={`${active}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
            }
        )
    }

    const onPreviousClick = (): void => {
        setIndex(carouselIndex -= 1)
        if (carouselIndex < 0) {
            setIndex(carouselIndex = 0)
        }
    }

    const onNextClick = (): void => {
        setIndex(carouselIndex += 1)
        if (carouselIndex > 2) {
            setIndex(carouselIndex = 0)
        }
    }


    const renderList = () => {
        return SliderData.map((el: string, index: number) => {
            const active = index === carouselIndex ? 'active' : 'hidden';
            const visible = index === carouselIndex ? true : false;
            return (
                <React.Fragment key={el}>
                    <Divider hidden />
                    <Transition visible={visible} animation="pulse" duration={500}><div key={el} className={`carousel item ${active}`}>
                        <div className="header-slider-item">
                            <img src={el} alt="Slider Image"/>
                            <div className="header-slider-caption">
                                <p>Some text goes here that describes the image</p>
                                <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                            </div>
                        </div>
                    </div>
                    </Transition>
                </React.Fragment>
            )
        })
    }


    return (
        <div className="carousel54">
            <div className="carousel_wrapper">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                </div>
                <div className="carousel-inner">
                    <div className="header-slider normal-slider">
                    {renderList()}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" onClick={() => onPreviousClick()} data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={() => onNextClick()} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators">
                    {renderButton()}
                </div>
            </div>
        </div>
    )
}




export default Carousel
