import { Carousel } from "./Carousel";
import coffee from "../data/coffee.json";
import donut from "../images/donuts.jpg";
import pastry from "../data/pastry.json";

export const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="py-20 px-5 flex items-center justify-center">
        <div className="justify-center flex flex-col lg:flex-row max-w-[1360px] gap-[8.33%] items-center">
          <div className="basis-2/5 flex flex-col  gap-10 pl-6 pr-10">
            <p className="text-6.5xl lg:text-8xl font-bold text-center lg:text-left">
              Fresh & Tasty
            </p>
            <p className="text-center text-lg lg:text-left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <button className="py-3 px-4 rounded-lg bg-egopink text-white">
                Make a Reservation
              </button>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center">
            <img
              className="h-140"
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
      <div className="flex justify-center mt-40">
        <div className="max-w-[1360px] flex flex-col">
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="basis-1/2 flex justify-center ">
              <img
                className="rounded-lg h-140 object-center object-cover"
                src="https://png.pngtree.com/png-clipart/20240510/original/pngtree-cheese-cake-strawberry-recipe-png-image_15059175.png"
                alt="Strawberry Cake"
              />
            </div>
            <div className="basis-1/2 p-20 flex flex-col items-center justify-center gap-10">
              <p className="text-5xl font-medium">The best day starts here</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="basis-1/2 p-20 justify-center flex flex-col  gap-10">
              <p className="text-5xl font-medium">Open everyday</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="basis-1/2 flex justify-center ">
              <img
                className="rounded-lg h-140 object-center object-cover"
                src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-coffee-shop-building-vector-isolated-picture-image_8479829.png"
                alt="Coffee Shop"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <Carousel
              slides={coffee}
              options={{
                slidesToScroll: "auto",
                
              }}
            />
            <button className="bg-egopink px-4 py-3 rounded-lg text-white">
              Go to Menu
            </button>
          </div>
          <div className="mt-20 p-10 lg:px-20 relative">
            <img
              className="rounded-lg h-171 w-full object-center object-cover"
              src={donut}
              alt="donut"
            />
            <div className="absolute left-20 bottom-20">
              <div className="relative">
                <img
                  src="https://assets.website-files.com/640f43d9a407812b6c8e6220/640f43d9a407811e648e62ba_green%20cloud.svg"
                  alt="Green cloud"
                />
                <div className="absolute left-10 bottom-10 flex flex-col gap-6 w-80">
                  <p className="text-5xl">Try our special desserts</p>
                  <div>
                    <button className="bg-egopink px-4 py-3 rounded-lg text-white">
                      Go to Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-20 justify-center items-center">
            <div className="flex flex-col gap-6 justify-center items-center w-2/3">
              <p className="text-5xl">Pastry</p>
              <p className="text-md text-center">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
              <Carousel
                slides={pastry}
                options={{
                  slidesToScroll: "auto",
                  
                }}
              />
              <button className="bg-egopink px-4 py-3 rounded-lg text-white">
                Go to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 p-10 lg:px-20 lg:flex-row bg-egogreen">
        <div className="hidden lg:flex w-1/2 justify-center ">
          <img
            className="rounded-lg h-140 object-center object-cover"
            src="https://png.pngtree.com/png-clipart/20240510/original/pngtree-cheese-cake-strawberry-recipe-png-image_15059175.png"
            alt="Strawberry Cake"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
          <p className="text-3xl text-left font-medium">Make a Reservation</p>
          <form className="flex flex-col w-full gap-2" action="#">
            <input
              className="px-4 py-3 rounded-lg"
              type="text"
              placeholder="Name"
            />
            <select className="px-4 py-3 rounded-lg" name="day">
              <option selected value="">
                Choose A day
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <select className="px-4 py-3 rounded-lg" name="time">
              <option value="">Choose a Time</option>
              <option value="From 10 am to 11 am">From 10 am to 11 am</option>
              <option value="From 11 am to 12 pm">From 11 am to 12 pm</option>
              <option value="From 12 pm to 1 pm">From 12 pm to 1 pm</option>
              <option value="From 1 pm to 2 pm">From 1 pm to 2 pm</option>
              <option value="From 2 pm to 3 pm">From 2 pm to 3 pm</option>
              <option value="Another option">From 3 pm to 4 pm</option>
              <option value="From 4 pm to 5 pm">From 4 pm to 5 pm</option>
              <option value="From 5 pm to 6pm">From 5 pm to 6pm</option>
            </select>
            <input
              className="px-4 py-3 rounded-lg"
              type="email"
              placeholder="Email address"
            />
            <input
              className="px-4 py-3 rounded-lg"
              type="tel"
              placeholder="Phone No"
            />
            <button className="bg-egopink mt-6 px-4 py-3 rounded-lg text-white">
              Go to Menu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
