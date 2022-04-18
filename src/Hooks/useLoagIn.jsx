import { async } from "@firebase/util";
import { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.init";

const useLogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleResetPassword = async () => {
    if(emailRef.current.value) {
       await sendPasswordResetEmail(emailRef)
    }else{
        toast.error('please type email input',{
            id: 'error'
        })
    }
  };
  return {
    signInWithEmailandPasswor: {
      user,
      loading,
      error,
    },
    emailRef,
    passwordRef,
    eventHandler: {
      handleSubmit,
      handleResetPassword,
    },
    resetPassword: {
        sending,
        resetError
    }
  };
};
export default useLogIn;
