
import { connect } from "react-redux";
import authActions from "../../redux/actions/authActions"
import "./login.css"
import img1 from "../../images/cta-logo-one.svg"
import { useState } from "react"
import img2 from "../../images/cta-logo-two.png"
import { useHistory } from "react-router"
import { NavLink } from "react-router-dom";
import BasicButtons from "../extras/extra";

function Login(props){
    const [loginbar,setbar] = useState(false)
    let history = useHistory();
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [pass,setpass] = useState("")
    const [file,setFile] = useState(null)

    if(props.auth && props?.auth?.isEmpty==false){
        history.push("/home")
    }
    console.log(props.auth.isEmpty)
    const handleName=(e)=>{
        setname(e.target.value)
        console.log(name)
    }
    const handleEmail=(e)=>{
        setemail(e.target.value)
        
    }
    const onSubmit=()=>{
    
        props.register({fullname:name ,profilepic:file,email:email, password:pass})
        setbar(!loginbar)
        history.push('/home')
      }

    const handlePass=(e)=>{
        setpass(e.target.value)
        
    }
    const handleUpload=(e)=>{
        let file = e?.target?.files[0];
        console.log(e)
        if(file!=null){
            setFile(file)
        }
    }
    const handleClick=(e)=>{
        setbar(!loginbar)
    }

    return(
        <div className="Container">
            {!loginbar?
            <div className="Content">
            <div className="CTA">

                <img src={img1} style={{marginBottom:"12px"}} className="ctaLogo1"/>

                

                <button className="signup" onClick={handleClick}>GET ALL THERE</button>

                <div className='desc'>
                    <p> Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.</p>

                </div>

                <img src={img2} style={{width:"100%",marginBottom:"28px"}} className="ctaLogo2"></img>
                {/* <span className="new">New User?</span> */}

            </div>
        </div>
        :
        <div className="Sign-up">
            <div className="form-item name">
                <input type="text" value={name} onChange={handleName} placeholder="Full Name"></input>

            </div>

            <div className="form-item email">
                <input type="email" value={email} onChange={handleEmail} placeholder="Email"></input>
            </div>

            <div className="form-item password">
                <input type="password" value={pass} onChange={handlePass} placeholder="Password"></input>
            </div>

            <BasicButtons upload={()=>{handleUpload()}} >Upload Photo</BasicButtons>

            <button className="signup" onClick={onSubmit}>Sign Up</button>

            <NavLink style={{textDecoration:"none",textAlign:"center"}} to="/login"><span className="new">Already a Member?</span></NavLink>
        </div>
        }
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
      auth:state.firebase.auth,
      authMine:state.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return{
      register : (userData) => dispatch(authActions.register(userData)) 
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Login);
