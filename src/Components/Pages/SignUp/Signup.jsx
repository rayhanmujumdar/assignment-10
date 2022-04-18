import { CheckIcon, XIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../../Hooks/useSignIn";
import Header from "../../Shared/Header/Header";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Signup = () => {
  const navigate = useNavigate()
  const { eventHandler, error, userInfo, signUpWithEmailPassword } =
    useSignIn();
  const {
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
    handleConfirmPasswordInput,
    handleSubmit,
  } = eventHandler;
  const { email, password, confirmPassword } = error;
  const { user, loading, signUpError } = signUpWithEmailPassword;
  useEffect(() => {
      if(user){
          toast.success('Successfully log in',{
            id: 'success'
          })
          toast.success('Varify email send check out',{
              id: 'verify',
              duration: 7000
          })
        navigate('/')
      }
  },[user])
  useEffect(() => {
    if (signUpError) {
      switch (signUpError.code) {
        case "auth/email-already-in-use":
          toast.error('Email already exist',{
              id: 'error'
          });
          break;
        default:
          toast.error("someting was wrong", {
            id: "error",
          });
      }
    }
  }, [signUpError]);

  return (
    <div>
      <Header></Header>
      {loading && <Loading></Loading>}
      <div>
        <div className="block p-6 md:mx-auto my-20 rounded-lg shadow-lg py-20 md:max-w-lg mx-2 bg-gray-900">
        <h1 className="text-white text-center mb-8 text-3xl border-b pb-2">Please Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                onChange={handleNameInput}
                type="text"
                className="form-control
                    block
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
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group mb-6 relative">
              <input
                onChange={handleEmailInput}
                type="email"
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
                id="exampleInput125"
                placeholder="Email address"
                required
              />
              {userInfo?.email && (
                <CheckIcon className="w-6 absolute z-20 top-1.5 right-1.5 text-green-600"></CheckIcon>
              )}
              <p className="text-white text-left mt-3">{email}</p>
            </div>
            <div className="form-group mb-6 relative">
              <input
                onChange={handlePasswordInput}
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
                id="exampleInput126"
                placeholder="Password"
                required
              />
              {userInfo?.password && (
                <CheckIcon className="w-6 absolute z-20 top-1.5 right-1.5 text-green-600"></CheckIcon>
              )}
              <p className="text-white text-left mt-3">{password}</p>
            </div>
            <div className="form-group mb-6 relative">
              <input
                onChange={handleConfirmPasswordInput}
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
                id="exampleInput126"
                placeholder="Confirm Password"
                required
              />
              {userInfo?.confirmPassword && (
                <CheckIcon className="w-6 absolute z-20 top-1.5 right-1.5 text-green-600"></CheckIcon>
              )}
              <p className="text-white text-left mt-3">{confirmPassword}</p>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck25"
                defaultChecked
              />
              <label
                className="form-check-label inline-block text-gray-300"
                htmlFor="exampleCheck25"
              >
                Subscribe to our MUSCLES MARCO
              </label>
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
              Sign up
            </button>
            <p className="text-gray-300 mt-6 text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Login
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Signup;
