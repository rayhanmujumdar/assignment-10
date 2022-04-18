import { useState } from "react"
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";

const useSignIn = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        signUpError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    const [userInfo,setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [error,setError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        errorCheck: ''
    })
    const handleNameInput = (e) => {
        setUserInfo({...userInfo,name:e.target.value})
    }
    const handleEmailInput = (e) => {
        if(/@/.test(e.target.value)){
            setUserInfo({...userInfo,email:e.target.value})
            setError({...error,email:''})
        }
        else if(e.target.value === ''){
            setError({...error,email:''})
            setUserInfo({...userInfo,email:''})
        }
        else{
            setError({...error,email:'❌ Invaild email'})
            setUserInfo({...userInfo,email:''})
        }
    }
    const handlePasswordInput = (e) => {
        if(e.target.value === ''){
            setError({...error,password:''})
            setUserInfo({...userInfo,password:''})
        }
        else if(e.target.value.length < 6){ 
            setError({...error,password: '❌ Minimum 6 character'})
            setUserInfo({...userInfo,password:''})
        }
        else{
            setError({...error,password: ''})
            setUserInfo({...userInfo,password: e.target.value})
        }
    }
    const handleConfirmPasswordInput = (e) => {
        if(userInfo?.password !== e.target.value){
            setError({...error,confirmPassword: '❌ Password missmatch'})
            setUserInfo({...userInfo,confirmPassword: ''})
        }
        else if(e.target.value === ''){
            setError({...error,confirmPassword:''})
            setUserInfo({...userInfo,confirmPassword:''})
        }
        else{
            setUserInfo({...userInfo,confirmPassword: e.target.value})
            setError({...error,confirmPassword: ''})
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(userInfo.email,userInfo.confirmPassword).then(() => {
            const displayName = userInfo.name
            updateProfile({displayName})
        })
        
    }
    return {
        eventHandler:{
            handleNameInput,
            handleEmailInput,
            handlePasswordInput,
            handleConfirmPasswordInput,
            handleSubmit
        },
        signUpWithEmailPassword: {
            user,
            loading,
            signUpError
        },
        userInfo,
        error
    }
}

export default useSignIn