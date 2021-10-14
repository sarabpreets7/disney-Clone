import './home.css'
import ImageSlider from '../imgslider/imgslider'
import Viewers from '../viewers/viewers'
import Recommended from '../recommends/recommend'
import Trending from '../trending/trending'
import { useEffect } from 'react'
import { database as db } from '../../firebase'
import { connect } from 'react-redux'
import * as movieActions from "../../redux/actions/movieActions"
import { useState } from 'react'
function Home(props){

    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []

    useEffect(async()=>{

        
            let entries = await db.movies.get();
            entries.forEach((entry)=>{
                if(entry!=null && entry.data().type=="recommend"){
                    recommends.push(entry.data())
                }
                else if(entry.data().type=="new"){
                    newDisneys.push(entry.data())
                }
                else if(entry.data().type=="original"){
                    originals.push(entry.data())
                }
                else if(entry.data().type=="trending" ){
                    trending.push(entry.data())
                }
            })
            
            props.addMovies(recommends,newDisneys,
                originals,
                trending)

        
        
    },[Recommended,Trending])
    
    
    
    return(
        <div className="home-container"> 
           <ImageSlider></ImageSlider>
           <Viewers></Viewers>
           <Recommended ></Recommended>
           <Trending ></Trending>

        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
      recommend : state.movies.recommends,
      newDisney : state.movies.newDisney,
      original : state.movies.original,
      trending : state.movies.trending
    }
  }

  const mapDispatchToProps=(dispatch)=>{
    return{
      addMovies: (recommend,newDisney,
        original,
        trending)=>dispatch(movieActions.add(recommend,newDisney,original,trending)),
      
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Home);