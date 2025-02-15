import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineFoodBank } from "react-icons/md";

const OurStoryContainer = () => {
  return (
    <>
      <div className="bg-gray-100 h-full p-4 md:py-15 md:px-20 md:pr-5 md:pb-5">
        <div className="container mx-auto h-full gap-10 flex flex-col lg:flex-row justify-between p-4">
          <div className="w-full lg:w-2/3 flex flex-col">
            <h1 className="custom-font text-5xl font-bold text-red-600 text-center md:text-left">
              Our Story
            </h1>
            <h3 className="py-4 text-3xl font-semibold text-center md:text-left">
              Until I discovered cooking I was never really interested in
              anything
            </h3>
            <p className="py-4 text-md text-center md:text-left">
              Pleased anxious or as in by viewing forbade minutes prevent. Too
              leave had those get being led weeks blind. Had men rose from down
              lady able. 
            </p>
            <p className="py-4 text-md text-center md:text-left">
            Its son him ferrars proceed six parlors. Advanced
              diverted domestic sex repeated bringing you old. Possible procured
              her trifling laughter thoughts property she met way. Companions
              shy had solicitude favourable own. Which could saw guest man now
              heard but. Lasted my coming uneasy marked so should. Gravity
              letters it amongst herself dearest an windows by. Wooded ladies
              she basket.
            </p>
            <div className="p-3 flex flex-col md:flex-row gap-2 md:gap-0">
              <div className="flex items-center gap-4 p-4 border border-gray-300 w-full md:w-1/2">
                <FaPhoneFlip style={{ color: "#e7000b", fontSize: "40px" }} />
                <div>
                  <h1 className="text-2xl font-bold text-red-600">
                    Contact Us
                  </h1>
                  <p className="text-sm">+91 123456789</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border md:border-l-0 border-gray-300 w-full md:w-1/2">
                <HiOutlineMailOpen
                  style={{ color: "#e7000b", fontSize: "40px" }}
                />
                <div>
                  <h1 className="text-2xl font-bold text-red-600">Eamil</h1>
                  <p className="text-sm">support@restcafe.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:mt-0 mt-10 bg-white relative shadow-lg flex flex-col items-center">
            <MdOutlineFoodBank
              style={{
                color: "#e7000b",
                fontSize: "80px",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background: "white",
                borderRadius: "50%",
                padding: "10px",
                boxShadow: "0 0 3px rgba(0,0,0,0.3)",
              }}
            />
            <div className="flex flex-col items-center pt-15 pb-3 w-full h-full">
              <h1 className="text-3xl uppercase font-bold text-red-600">
                Book a table
              </h1>
              <form className="w-full px-3 pt-3">
                <div className="flex py-2">
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 p-4 w-full outline-none"
                    placeholder="Name"
                  />
                </div>
                <div className="flex py-2">
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 p-4 w-full outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="flex py-2">
                  <select
                    name="person"
                    id="person"
                    className="border border-gray-300 p-4 w-full outline-none cursor-pointer"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                  </select>
                </div>
                <div className="flex py-2">
                  <input
                    type="date"
                    id="date"
                    className="border border-gray-300 p-4 w-full outline-none"
                  />
                </div>
                <button type="submit" className="bg-red-600 text-white p-4 mt-2 w-full outline-none rounded cursor-pointer">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStoryContainer;
