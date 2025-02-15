import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";

const PropertiesContainer = () => {
  return (
    <>
      <div className="h-full flex items-center flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col items-center w-full p-10 border-b-1 md:border-b-0 md:border-r-1 border-red-600">
          <FaBowlFood style={{ color: "#e7000b", fontSize: "60px" }}/>
          <h1 className="text-center text-2xl font-bold py-3">Quality Foods</h1>
          <p className="text-center"> 
            Belonging sir curiosity discovery extremity yet forfeited prevailed
            own off. Travelling by introduced of mr terminated.
          </p>
        </div>
        <div className="flex flex-col items-center p-10 w-full">
          <GiFoodTruck style={{ color: "#e7000b", fontSize: "60px" }}/>
          <h1 className="text-center text-2xl font-bold py-3">Fast Delivery</h1>
          <p className="text-center">
            Belonging sir curiosity discovery extremity yet forfeited prevailed
            own off. Travelling by introduced of mr terminated.
          </p>
        </div>
        <div className="flex flex-col items-center p-10 w-full border-t-1 md:border-t-0 md:border-l-1 border-red-600">
          <MdOutlineFoodBank style={{ color: "#e7000b", fontSize: "60px" }}/>
          <h1 className="text-center text-2xl font-bold py-3">Delicious recipes</h1>
          <p className="text-center">
            Belonging sir curiosity discovery extremity yet forfeited prevailed
            own off. Travelling by introduced of mr terminated.
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertiesContainer;
