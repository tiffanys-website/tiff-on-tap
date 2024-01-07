import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (

    <div className="bg-hand bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-center text-8xl font-serif">
        TIFF ON TAP
      </h1>

      <Link to="/main" className="m">
        <Button className="rounded-full bg-white hover:text-green-600 font-scary text-5xl mt-10">
          Enter if you dare
        </Button>
      </Link>
    
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <h1 className="text-white mb-30 mr-30 text-8xl font-scary animate-bounce">
        Tiff on Tap
      </h1>
      <img
        src="images/white-tappers.jpg"
        className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:max-w-screen-sm rounded mt-10"
        alt="Tiff on Tap"
      />
    </div>
  );
}
