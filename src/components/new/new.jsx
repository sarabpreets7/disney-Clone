
import img1 from '../../images/viewers-pixar.png'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
function New(props){
    let movies ;
    
    useEffect(()=>{
        
      
       
    },[props])
    
    return(
        <div className="Container-recc">
            <h4>New To Disney+</h4>
            <div className="Content-recc">
                
                {props.newDisneys && props.newDisneys.map(function(movie){
                    return(
                        <div className="wrap-recc">
                             <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg}></img>
                            </Link>
                        </div>
                    )
                })}
                
                
                
{/* 
                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div>

                <div className="wrap-recc">
                    <img src={img1}></img>
                </div> */}

            </div>
        </div>

    )
}
const mapStateToProps=(state)=>{
    
    return{
        newDisneys : state.movies.newDisneys,
      
    }
  }
export default connect(mapStateToProps)(New);