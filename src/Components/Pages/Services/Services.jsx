import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTips from "../../../Hooks/useTips";
import Header from "../../Shared/Header/Header";
import Loading from "../../Shared/Loading/Loading";
import Service from "../Service/Service";

const Services = ({ hide, dataView,children }) => {
  const [services, setServices ,loading] = useTips();
  return (
    <div>
      {hide || <Header></Header>}
      {
          loading && <Loading></Loading>
      }
      <div className="pb-10 bg-zinc-300">
          <h1 className="text-center py-8 md:text-3xl text-2xl font-thin border-b border-gray-400 mb-5">Most Important Gym Routines for Men</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 lg:px-3">
          {services.slice(0, dataView).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        {
            children
        }
      </div>
    </div>
  );
};

export default Services;
