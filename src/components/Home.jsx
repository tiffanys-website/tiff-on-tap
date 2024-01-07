import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-center text-8xl font-scary">
        Tiff on Tap
      </h1>

      <Link to="/main">
        <Button style={{ backgroundColor: "white", color: "black" }}>
          Click Here
        </Button>
      </Link>
    </div>
  );
}
