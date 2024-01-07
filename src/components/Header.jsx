import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full flex justify-center gap-10">
      <Link to="/">
        <img src="images/tiff.png" className="max-w-xs" />
      </Link>
      <div className="flex justify-center items-center">
        <h1 className="text-center text-green-600 font-scary text-8xl">
          Tiff on Tap
        </h1>
        <Navbar />
      </div>
    </header>
  );
}
