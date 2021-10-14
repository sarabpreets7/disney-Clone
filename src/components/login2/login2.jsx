import { useState } from "react"
import { connect } from "react-redux";
import authActions from "../../redux/actions/authActions"
import { useHistory } from "react-router";

function Login2(props){
    let history = useHistory()
    const[email,setemail] = useState("")
    const [pass,setpass] = useState("")

    if(props.auth && props?.auth?.isEmpty==false){
      history.push("/home")
  }
    const handleEmail=(e)=>{
        setemail(e.target.value)
        
    }
    const onSubmit=()=>{
    
        let obj = {email:email,password:pass}
        console.log(obj)

        props.signIn(obj)
        history.push("/home")
      }

    const handlePass=(e)=>{
        setpass(e.target.value)
        
    }
    return(
        <div className="Container">
        
                <div className="Sign-up">
                   

                    <div className="form-item email">
                        <input type="email" value={email} onChange={handleEmail} placeholder="Email"></input>
                    </div>

                    <div className="form-item password">
                        <input type="password" value={pass} onChange={handlePass} placeholder="Password"></input>
                    </div>

                   

                    <button className="signup" onClick={onSubmit}>LOGIN</button>

                    
            </div>
    
        
    </div>
    )
}


const mapStateToProps = (state)=>{
    return{
      authMine:state.auth,
      authFirebase:state.firebase.auth
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      signIn: (userData)=> dispatch(authActions.signIn(userData))
    }
  }
   
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login2);