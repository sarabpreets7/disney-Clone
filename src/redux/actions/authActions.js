import * as actionTypes from './actionTypes';
import {storage,database} from "../../firebase"
export const signInRequest =()=>{
    return{
        type:actionTypes.SIGN_IN_REQUEST
    }
}

export const signInSuccess =()=>{
    return{
        type:actionTypes.SIGN_IN_SUCCESS
    }
}

export const signInFailed = (err) => {
    return{
        type:actionTypes.SIGN_OUT_FAILED,
        error:err
    }
}

export const signIn = (userData) => {
    return async(dispatch,getState,obj) => {
        const {getFirebase,getFirestore} = obj;
        dispatch(signInRequest())
        const firebase = getFirebase();
        try{
            let data = await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);
            
            dispatch(signInSuccess())
        }catch(err){
            dispatch(signInFailed())
            setTimeout(()=>{
                dispatch(removeError())
            },2000)
        }
    }
}


export const removeError = () => {
    return {
        type:actionTypes.REMOVE_ERROR
    }
}

export const registerRequest = () => {
    return{
        type:actionTypes.REGISTER_REQUEST
    }
}

export const registerSuccess = () => {
    return{
        type:actionTypes.REGISTER_SUCCESS
    }
}

export const registerFailed = (err) => {
    return {
        type:actionTypes.REGISTER_FAILED,
        error:err
    }
}

export const register = (userData) => {
    return async(dispatch,getState,{getFirebase,getFirestore}) => {
        dispatch(registerRequest());
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(userData.email,userData.password).then(async(data)=>{
            let uid = data.user.uid;
            const uploadListener = storage.ref("/users/"+uid).put(userData.profilepic);
            uploadListener.on("state_changed",onprogress,onerror,onsucess);
            function onprogress(snapshot){
                let progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                console.log(progress);
            }

            function onerror(err){
                console.log(err)
            }
            async function onsucess(){
                let downloadUrl = await uploadListener.snapshot.ref.getDownloadURL()

                database.users.doc(uid).set({
                    email: userData.email,
                    fullName: userData.fullname,
                    profileUrl: downloadUrl,
                    
                })

            }

            dispatch(registerSuccess());
        }).catch((err)=>{
            console.log(err)
            dispatch(registerFailed());
            setTimeout(()=>{
                dispatch(removeError())
            },2000);
        })
    }
}
    



export function signout(){
    console.log("hello")
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:actionTypes.SIGN_OUT})
        }).catch((err)=>{
            dispatch({type:actionTypes.SIGN_OUT_FAILED,error:err})
        })
    }
}

export default {signIn,signInFailed,signInRequest,signInSuccess,signout,register,removeError}