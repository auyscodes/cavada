import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div >
      <div className="relative flex flex-row justify-between items-center z-10 bg-egoorange p-4">
        <div className="flex flex-row gap-8">
          <img
            src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a40781481a8e628d_logo.svg"
            alt="Logo"
          />
          <div className="hidden lg:flex lg:flex-row gap-8 text-nowrap">
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>

        <div className="hidden lg:block">
          <button className="border border-black py-2 px-4 rounded-lg hover:bg-egodorange">
            Make a Reservation
          </button>
        </div>
        <div
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          role="button"
          className={
            "w-10 h-10 px-2 flex lg:hidden rounded-lg cursor-pointer " +
            (isClicked ? "bg-egogreen" : "")
          }
        >
          <img
            className={"block "}
            src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bce8a884445bf824d9ce_Hamburger%20Menu.svg"
          />
        </div>
      </div>
      <div className="absolute w-full z-0 ">
        <div
          className={
            " p-4 flex flex-col items-center gap-4 navBar overflow-hidden bg-egoorange  " +
            (isClicked ? "" : "hideNavBar")
          }
        >
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/blog">Blog</Link>
          <button className="border border-black py-2 px-4 rounded-lg hover:bg-egodorange">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
};
