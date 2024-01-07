import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-center text-8xl font-scary">
        Tiff on Tap
      </h1>

      <img src="/images/tiff.png" className="max-w-sm mt-10" />

      <Link to="/main" className="m">
        <Button className="rounded-full bg-white hover:text-green-600 font-scary text-5xl mt-10">
          Lets Go!
        </Button>
      </Link>
    </div>
  );
}
