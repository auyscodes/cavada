export const Home = () => {
  return (
    <div>
      <div className="py-20 px-5 flex items-center justify-center">
        <div className="justify-center flex flex-col lg:flex-row max-w-[1360px] gap-[8.33%] items-center">
          <div className="basis-2/5 flex flex-col gap-10 pl-6 pr-10">
            <p className="text-6.5xl lg:text-8xl font-bold text-center">
              Fresh & Tasty
            </p>
            <p className="text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet
            </p>
            <div className="flex justify-center">
              <button className="py-3 px-4 rounded-lg bg-egopink text-white">
                Make a Reservation
              </button>
            </div>
          </div>
          <div className="basis-1/2">
            <img
              src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a407817e728e628c_coffee_cookies.png"
              alt="A cuo of coffee with cookies"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-6 ">
        <div className="basis-1/4 flex flex-col gap-2 items-center">
          <p className="text-6xl font-semibold text-egopink">10</p>
          <p>Shops</p>
        </div>
        <div className="basis-1/4 flex flex-col gap-2 items-center">
          <p className="text-6xl font-semibold text-egopink">06</p>
          <p>Years of Experience</p>
        </div>
        <div className="basis-1/4 flex flex-col gap-2 items-center">
          <p className="text-6xl font-semibold text-egopink">120+</p>
          <p>Coffees</p>
        </div>
        <div className="basis-1/4 flex flex-col gap-2 items-center">
          <p className="text-6xl font-semibold text-egopink">1302+</p>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};
