import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full flex ">
      <Link to="/">
        <img src="images/tiff.png" className="max-w-xs" />
      </Link>
      <div className="flex justify-center items-center ml-20">
        <h1 className="text-center text-green-600 font-scary text-8xl">
          Tiff on Tap
        </h1>
      </div>
    </header>
  );
}
