import "./viewers.css"
import img1 from "../../images/viewers-disney.png"
import vid1 from "../../videos/1564674844-disney.mp4"

import img2 from "../../images/viewers-marvel.png"
import vid2 from "../../videos/1564676115-marvel.mp4"

import img3 from "../../images/viewers-national.png"
import vid3 from "../../videos/1564676296-national-geographic.mp4"

import img4 from "../../images/viewers-pixar.png"
import vid4 from "../../videos/1564676714-pixar.mp4"

import img5 from "../../images/viewers-starwars.png"
import vid5 from "../../videos/1608229455-star-wars.mp4"

function Viewers(props){

    return(
        <div className="Container-viewer ">

            <div className="wrap-viewer">
                <img src={img1}></img>
                <video autoPlay="autoplay" loop={true} playsInline="true">
                    <source src={vid1} type="video/mp4" />
                </video>
            </div>

            <div className="wrap-viewer">
                <img src={img2}></img>
                <video type="video/mp4" autoPlay="true" loop="true" playsInline="true" src={vid2}></video>
            </div>

            <div className="wrap-viewer">
                <img src={img3}></img>
                <video autoPlay="true" loop="true" playsInline="true" src={vid3}></video>
            </div>

            <div className="wrap-viewer">
                <img src={img4}></img>
                <video autoPlay="true" loop="true" playsInline="true" src={vid4}></video>
            </div>

            <div className="wrap-viewer">
                <img src={img5}></img>
                <video autoPlay="true" loop="true" playsInline="true" src={vid5}></video>
            </div>

        </div>
    )
}

export default Viewers;