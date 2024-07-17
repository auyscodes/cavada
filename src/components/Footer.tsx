import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex bg-white">
      <div className="flex flex-col gap-10 p-10 max-w-[1360px] w-full">
        <img
          className="w-40"
          src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a40781481a8e628d_logo.svg"
          alt="Logo"
        />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
          <div className="flex flex-col gap-4 md:col">
            <p className="text-2xl">Menu</p>
            <div className="flex flex-col gap-2">
              <Link className="underline" to="/home">
                Home
              </Link>
              <Link className="underline" to="/about">
                About Us
              </Link>
              <Link className="underline" to="/menu">
                Menu
              </Link>
              <Link className="underline" to="/blog">
                Blog
              </Link>
              <Link className="underline" to="/reservation">
                Reservation
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Utility Pages</p>
            <div className="flex flex-col gap-2">
              <Link className="underline" to="/getstarted">
                Get Started
              </Link>
              <Link className="underline" to="/changelog">
                Changelog
              </Link>
              <Link className="underline" to="/licenses">
                Licenses
              </Link>
              <Link className="underline" to="/styleguide">
                Styleguide
              </Link>
              <Link className="underline" to="/components">
                Components
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl">Contacts</p>
            <div className="gap-2 flex flex-col">
              <p>1127 Santa Monica Blvd</p>
              <p className="mt-2 underline">+1 888 888 88 88</p>
              <p className="underline">help@cavada.com</p>
            </div>
            <div className="flex flex-row gap-2 mt-2">
              <div className="rounded-full flex justify-center items-center ">
                <a href="https://linkedin.com" target="_blank">
                  <img
                    src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a407814a218e6297_5.png"
                    className="w-8"
                  />
                </a>
              </div>
              <div className="rounded-full flex justify-center items-center ">
                <a href="https://facebook.com" target="_blank">
                  <img
                    src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a4078183d38e6296_3.png"
                    className="w-8"
                  />
                </a>
              </div>
              <div className="rounded-full flex justify-center items-center ">
                <a href="https://facebook.com" target="_blank">
                  <img
                    src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a40781682a8e6295_2.png"
                    className="w-8"
                  />
                </a>
              </div>
              <div className="rounded-full flex justify-center items-center ">
                <a href="https://instagram.com" target="_blank">
                  <img
                    src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a4078143778e6294_4.png"
                    className="w-8"
                  />
                </a>
              </div>
              <div className="rounded-full flex justify-center items-center ">
                <a href="https://twitter.com" target="_blank">
                  <img
                    src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a4078136aa8e6293_1.png"
                    className="w-8"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:col">
            <p className="text-2xl">Subscribe to newsletter</p>
            <div className="flex flex-col gap-4">
              <p>Contact us if you need help with anything</p>
              <input
                className="px-4 py-3 rounded-lg border border-gray-400"
                type="email"
                placeholder="Email address"
              />
              <button className="bg-egopink  px-4 py-3 rounded-lg text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-16 text-center">Copyright © Cavada</div>
      </div>
    </div>
  );
};
