import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLogIn from "../../../Hooks/useLoagIn";
import Header from "../../Shared/Header/Header";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { emailRef, passwordRef, eventHandler, signInWithEmailandPasswor,resetPassword } =
    useLogIn();
  const {handleSubmit,handleResetPassword} = eventHandler
  const { user, error, loading } = signInWithEmailandPasswor;
  const {sending,resetError} = resetPassword
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      toast.success("Successfully log in", {
        id: "success",
      });
      navigate(from, { replace: true });
    }
  }, [user]);
  useEffect(() => {
    if(sending){
        toast.success('Wait and Check Mail',{
            id: 'sending',
            duration: 3000
        })
    }
  },[sending])
  console.log(resetError?.code)
  useEffect(() => {
     if(resetError){
      switch(resetError?.code){
          case 'auth/network-request-failed':
            toast.error('Email Not Found',{
              id: 'No account Found',
              duration: 7000
          })
          break
          default:
            toast.error('Something was wrong',{
              id: 'wrong',
              duration: 7000
            })
      }
        
    }
  },[resetError])
  useEffect(() => {
    console.log(error?.code);
    if (error) {
      switch (error?.code) {
        case "auth/wrong-password":
          toast.error("wrong-password", {
            id: "error",
            duration: 7000
          });
          break;
        case "auth/user-not-found":
          toast.error("User not found", {
            id: "error",
            duration: 7000,
          });
          break;
        default:
          toast.error("someting was wrong", {
            id: "error",
            duration: 7000,
          });
      }
    }
  }, [error]);
  const load = loading || sending
  return (
    <div>
      <Header></Header>
      { load && <Loading></Loading>}
      <div className="block p-6 sm:mx-auto sm:max-w-lg mx-2 text-left my-20 rounded-lg shadow-lg bg-gray-900 py-12">
        <h1 className="text-white text-center mb-8 text-3xl border-b pb-2">
          Please Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-300"
            >
              Email address
            </label>
            <input
              ref={emailRef}
              type="email"
              className="form-control
                 block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0 focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label inline-block mb-2 text-gray-300"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword2"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-300"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <p
            onClick={handleResetPassword}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
          >
            Sign in
          </button>
          <p className="text-gray-300 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
            </Link>
          </p>
        </form>
        <SocialLogin from={from}></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
