import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.init";

const useSocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook,facebookUser,facebookLoading,facebookError] = useSignInWithFacebook(auth)
    const [signInWithGithub,githubUser,githubLoading,githubError] = useSignInWithGithub(auth)
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook()
    }
    const handleGitHubSignIn = () => {
        signInWithGithub()
    }
    console.log(githubUser,githubError)
    const user = googleUser || facebookUser || githubUser
    const loading = googleLoading || facebookLoading || githubLoading
    const error = googleError || facebookError || githubError
    return {
        eventHandler: {
            handleFacebookSignIn,
            handleGoogleSignIn,
            handleGitHubSignIn
        },
        signInSocial:{
          user,
          loading,
          error  
        }
    }
}
export default useSocialLogin