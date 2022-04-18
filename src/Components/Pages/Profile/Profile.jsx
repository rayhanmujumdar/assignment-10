import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.init";
import Header from "../../Shared/Header/Header";
import NoImage from "../../../image/Logo/No_image.svg";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Loading from "../../Shared/Loading/Loading";
import toast from "react-hot-toast";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const handleVerifyEmail = async () => {
    await sendEmailVerification().then(() => {
      toast.success("Sent Email", {
        id: "error",
      });
    })
  };
  useEffect(() => {
    if (sending) {
      toast.success("Sending", {
        id: "sending",
      });
    }
  }, [sending]);
  useEffect(() => {
    if (error) {
      toast.error(error?.message, {
        id: "error",
      });
    }
  }, [error]);
  console.log(user)
  return (
    <div>
      <Header></Header>
      {
        loading && <Loading></Loading>
      }
      <div className="flex flex-col justify-center items-center my-14">
        <img
          src={user?.photoURL || NoImage}
          alt=""
          className="lg:w-56 md:w-40 w-1/4 rounded-full bg-gray-900 m-2"
        />
        <h1 className="capitalize text-2xl font-thin">{user?.displayName || 'User Not Found'}</h1>
        {
            user && <p className="mt-1">Email: {user?.email || 'No Email'}</p>}
        {
        user && <div>
          {user?.emailVerified ? (
            <p className="text-green-600 text-2xl">Verified</p>
          ) : (
            <p className="text-red-600 text-2xl flex items-center">
              No Verified{" "}
              <span
                onClick={handleVerifyEmail}
                className="p-3 animate-pulse hover:animate-none"
              >
                <ArrowRightIcon className="w-7 hover:text-green-600"></ArrowRightIcon>
              </span>
            </p>
          )}
        </div>
        }
      </div>
    </div>
  );
};

export default Profile;
