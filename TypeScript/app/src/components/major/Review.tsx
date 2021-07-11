import React from "react";
import img1 from "./../../img/review-2.jpg"
import img2 from "./../../img/review-3.jpg"
import img3 from "./../../img/review-1.jpg"
import img4 from "./../../img/arthas.png"
import img5 from "./../../img/s1mple.png"
import Carousel from "react-multi-carousel";
import {Reviews} from "../../interfaces";
import {Rating} from "semantic-ui-react";



const Review = (): JSX.Element => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }
    const ReviewData: Reviews[] = [
        {name: "Pablo", profession: "Drugdealer", description: "Pizdatiy Koks", img: img1},
        {name: "Bigass", profession: "BLM Expert", description: "Black Lives Matter!", img: img2},
        {name: "Samantha", profession: "Anti BLM Expert", description: "All Lives Matter!", img: img3},
        {name: "Vitaliy Tsal", profession: "Streamer", description: "Fucking rats in factory", img: img4},
        {name: "Sasha Kostylev", profession: "CSGO Player", description: "Ladislav suka Kovac", img: img5},
    ]
   const ReviewList = () => {
        return ReviewData.map(el => {
       return (
               <div className="review-slider-item">
                   <div className="review-img">
                       <img src={el.img} alt="Image" />
                   </div>
                   <div className="review-text">
                       <h2>{el.name}</h2>
                       <h3>{el.profession}</h3>
                       <div className="ratting">
                           <Rating icon='star' defaultRating={5} size='huge' maxRating={5} onRate={() => {console.log(true)}} />
                       </div>
                       <p>
                           {el.description}
                       </p>
                   </div>
               </div>
       )
        })
   }
    return (
        <div className="review">
            <div className="container-fluid">
                <Carousel infinite={true} responsive={responsive}>
                    {ReviewList()}
                </Carousel>
            </div>
        </div>
    )
}



export default Review