import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useSocialLogin from "../../../Hooks/useSocialLogin";
import Loading from "../Loading/Loading";

const SocialLogin = ({ from }) => {
  const navigate = useNavigate();
  const { eventHandler, signInSocial } = useSocialLogin();
  const { handleGoogleSignIn ,handleFacebookSignIn,handleGitHubSignIn } = eventHandler;
  const { user, loading, error } = signInSocial;
  useEffect(() => {
    if (user) {
      toast.success("Successfully login", {
        id: "success",
      });
      navigate(from || "/");
    }
  }, [user]);
  console.log(user)
  if(error){
    switch(error.code){
        case "auth/popup-closed-by-user":
            toast.error('popup closed by user',{
                id: 'error',
                duration:  5000 
            })
        break;
        default:
            toast.error('Something was wrong',{
                id: 'error'
            });
    }
  }
  return (
    <div className="text-white text-center">
        {
            loading && <Loading></Loading>
        }
      <div className="flex justify-center items-center my-5">
        <div className="bg-gray-500 w-40 h-1"></div>
        <p className="px-3">or</p>
        <div className="bg-gray-500 w-2/5 h-1"></div>
      </div>
      <div>
        <div className="my-3">
          <button
            onClick={handleGoogleSignIn}
            className="w-full mx-auto border py-2 rounded-sm flex justify-start items-center hover:bg-gray-700"
          >
            <i className="fa-brands fa-google text-xl mx-3 shadow-lg"></i>
            Continue with Google{" "}
          </button>
        </div>
        <div className="my-3">
          <button onClick={handleFacebookSignIn} className="md:w-4/5 w-full mx-auto border py-2 rounded-sm flex justify-start items-center hover:bg-gray-700">
            <i className="fa-brands fa-facebook text-xl mx-3 shadow-lg"></i>
            Continue with Facebook{" "}
          </button>
        </div>
        <div className="my-3">
          <button onClick={handleGitHubSignIn} className="md:w-2/4 w-full mx-auto border py-2 rounded-sm flex justify-start items-center hover:bg-gray-700 shadow-lg">
            <i className="fa-brands fa-github text-xl mx-3"></i>Continue with
            Github{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
