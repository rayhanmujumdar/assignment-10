import React from "react";
import banner1 from "../../../../image/banner/banner1.jpg";
import banner2 from "../../../../image/banner/banner2.jpg";
import banner3 from "../../../../image/banner/banner3.jpg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <div
            className="banner1 bg-cover bg-no-repeat bg-center h-screen"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>
          <div class="carousel-caption block absolute text-center rounded-md md:px-10 px-6 lg:w-3/6 lg:mx-auto" style={{background: "rgba(0,0,0,0.6)"}}>
            <h5 class="text-2xl">Weight Loss</h5>
            <p>As the calendar ticks over to January 1st, millions of people make a resolution to lose weight or to eat healthier the 12 months. Unfortunately, most of these resolutions fail before the end of January</p>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <div
            className="banner2 bg-cover bg-no-repeat bg-center h-screen "
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>
          <div class="carousel-caption block absolute text-center rounded-md md:px-10 px-6 lg:w-3/6 lg:mx-auto" style={{background: "rgba(0,0,0,0.6)"}}>
            <h5 class="text-2xl">Fit & Healthy</h5>
            <p>Exercise daily for at least an hour. You do not have to kill yourself from running, jogging, etc., but you should have some sort of moderate physical activity in your everyday life</p>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <div
            className="banner3 bg-cover bg-no-repeat bg-center h-screen"
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>
          <div class="carousel-caption block absolute text-center rounded-md md:px-10 px-6 lg:w-3/6 lg:mx-auto" style={{background: "rgba(0,0,0,0.6)"}}>
            <h5 class="text-2xl">Muscle Building</h5>
            <p>Building muscle is why most of us constantly return to the gym. It's the beacon of light that continues to drive our effort-driven workouts that many consider us crazy for, but how do we build muscle effectively? That's the question that trips up so many lifters</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <ArrowLeftIcon
          class="w-12 inline-block bg-no-repeat"
          aria-hidden="true"
        ></ArrowLeftIcon>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <ArrowRightIcon
          class="w-12 inline-block bg-no-repeat"
          aria-hidden="true"
        ></ArrowRightIcon>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
