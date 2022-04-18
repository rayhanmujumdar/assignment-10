import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Header classAdd={true}></Header>
      <Banner></Banner>
      <Services hide={true} dataView={4}>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/services")}
            className="bg-gray-900 text-white px-10 py-2 mt-10 rounded-md"
          >
            see more
          </button>
        </div>
      </Services>
    </div>
  );
};

export default Home;
