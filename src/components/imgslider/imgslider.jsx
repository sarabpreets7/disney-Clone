import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'
import img1 from "../../images/slider-badag.jpg"
import img2 from "../../images/slider-badging.jpg"
import img3 from "../../images/slider-scale.jpg"
import img4 from "../../images/slider-scales.jpg"

const ImageSlider=(props)=>{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

      return(
          <Slider className="slider" {...settings}>
              <div className="wrap">
                  <img src={img1}></img>
              </div>

              <div className="wrap">
                  <img src={img2}></img>
              </div>

              <div className="wrap">
                  <img src={img3}></img>
              </div>

              <div className="wrap">
                  <img src={img4}></img>
              </div>
          </Slider>
      )
}
export default ImageSlider