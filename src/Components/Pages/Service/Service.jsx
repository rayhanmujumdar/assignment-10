import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const {id,picture,name,details} = service
    const navigate = useNavigate()
  return (
    <div data-aos="fade-up" className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <div className="h-96 overflow-hidden rounded-lg">
                <img className="rounded-t-lg hover:scale-125 duration-500 ease-in-out delay-200" src={picture} alt=""/>
            </div>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">
              {
                details.slice(0,200)
              },<span className="font-semibold">More...</span>
            </p>
            <button onClick={() => navigate(`/details/${id}`)} type="button" className=" inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">More Details</button>
          </div>
        </div>
      </div>
  );
};

export default Service;
