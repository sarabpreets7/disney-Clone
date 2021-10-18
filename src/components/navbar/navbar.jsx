import "./navbar.css"
import logo from "../../images/logo.svg"
import home from "../../images/home-icon.svg"
import search from "../../images/search-icon.svg"
import watch from "../../images/watchlist-icon.svg"
import originals from "../../images/original-icon.svg"
import moviess from "../../images/movie-icon.svg"
import series from "../../images/series-icon.svg"
import { auth } from "../../firebase"
import { connect } from "react-redux";
import authActions from "../../redux/actions/authActions.js"
import {isLoaded,isEmpty} from 'react-redux-firebase';
import { useHistory } from "react-router"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { database } from "../../firebase"

function Navbar(props){
    let history = useHistory()
    const [img,setimage] = useState("")
    const auth = props.auth
    let uid = auth.uid
    console.log(uid)
    
    useEffect(async()=>{
        let userr = await database.users.doc(uid).get()
        
        setimage(userr?.data()?.profileUrl)
    },[])
    const handleLogOut=()=>{
        console.log('The user will sign out');
        history.push('/')
        props.signOut();
       }

    return(
        
            <div className="navbar" >
            
                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90%"}}>
                     <NavLink style={{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}} to='/'>
                        <img style={{height:"80%"}} src={logo}/>
                    </NavLink>
                </div>

                {isLoaded(auth) && !isEmpty(auth)?
                <div className="subnav" style={{height:"100%",display:"flex",width:"100%",alignItems:"center"}}>
                    <div className="nav-menu">

                        <div  className="nav-item home">
                            <img src={home}></img>
                            <span>HOME</span>
                        </div>

                        <div className="nav-item search">
                            <img src={search}></img>
                            <span>SEARCH</span>
                        </div>

                        <div className="nav-item watchlist">
                            <img src={watch}></img>
                            <span>WATCHLIST</span>
                        </div>

                        <div className="nav-item originals">
                            <img src={originals}></img>
                            <span>ORIGINALS</span>
                        </div>

                        <div className="nav-item movies">
                            <img src={moviess}></img>
                            <span>MOVIES</span>
                        </div>

                        <div className="nav-item series">
                            <img src={series}></img>
                            <span>SERIES</span>
                        </div>
                    </div>

                    <div className="sidedetail" style={{height:"100%",width:"180px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>


                        <button className="login" onClick={handleLogOut}>
                            LOGOUT
                        </button>

                        {/* <span className="login">
                            <img src={img}></img>
                        </span> */}
                    </div>

                </div>
                :
                <div className="loggin">
                    <NavLink to='/login'>
                    <button className="login" onClick={handleLogOut}>
                            LOGIN
                        </button>
                        </NavLink>
                </div>
                
            }
                

            
            </div>
            

    )
        
        
           

           
            {/* { isLoaded(auth) && !isEmpty(auth) ?
            <div style={{width:"200px",display:"flex",justifyContent:"space-around",alignItems:"center"}}>


                <button className="login" onClick={handleLogOut}>
                    LOGOUT
                </button>

                <span className="login">
                    {auth.ProfilePic}
                </span>
            </div>
           
            
            :

            <button className="login">
                LOGIN
            </button>
            } */}
            
            
        
    }

const mapStateToProps=(state)=>{
    return{
       auth: state.firebase.auth
    }
  }
  const mapDispatchToProps= (dispatch)=>{
    return {
     signOut:()=>dispatch(authActions.signout())
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
  

