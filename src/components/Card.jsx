import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const image =
    "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg";
  return (
    <div>
      <div className="h-52 w-1/2 md:w-1/5 relative bg-blue-200  rounded-2xl">
        <div className="h-1/2"></div>
        <div
          className={`absolute h-3/4 w-1/2 top-0  transform translate-x-1/2 bg-pink-500 rounded-b-full bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="absolute h-1/6 w-1/2 left-0 top-2/3 transform translate-y-1/2 bg-pink-500 rounded-r-full">
          <p className="font-bold text-2xl">240$ </p>
        </div>
        <div className="bg-red-300 text-center pt-24 pb-8 px-8 rounded-b-2xl">
          <h1 className="text-2xl font-bold "> Name</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet.</p>
          <Link to="/details" className="border p-2 rounded-full">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
