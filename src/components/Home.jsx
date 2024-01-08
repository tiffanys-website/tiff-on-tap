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
          Click Here
        </Button>
      </Link>
    </div>
  );
}
