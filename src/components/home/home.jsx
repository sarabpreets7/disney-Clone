import './home.css'
import ImageSlider from '../imgslider/imgslider'
import Viewers from '../viewers/viewers'
import Recommended from '../recommends/recommend'
import Trending from '../trending/trending'

function Home(){
    return(
        <div className="home-container"> 
           <ImageSlider></ImageSlider>
           <Viewers></Viewers>
           <Recommended></Recommended>
           <Trending></Trending>

        </div>
    )
}

export default Home