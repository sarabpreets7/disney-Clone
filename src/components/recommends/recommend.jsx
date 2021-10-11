import './recommends.css'
import img1 from '../../images/viewers-pixar.png'
function Recommended(){

    return(
        <div className="Container-recc">
            <h4>Recommended for you</h4>
            <div className="Content-recc">
                
                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

            </div>
        </div>

    )
}
export default Recommended;