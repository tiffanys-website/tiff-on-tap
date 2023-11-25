import React from "react";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <img
        src="images/tiff.png"
        className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:max-w-screen-md"
        alt="Tiff on Tap"
      />
      <h1 className="text-lime mt-20 mr-20 text-9xl font-scary animate-pulse">
        Subscribe
      </h1>
    </div>
  );
}
