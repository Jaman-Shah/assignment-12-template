import React from "react";

const Details = () => {
  const image =
    "https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906";
  return (
    <div className="h-screen w-full bg-gray-400 flex justify-center items-center">
      <div className="relative overflow-hidden  h-4/5 w-4/5 z-10 shadow-2xl bg-blue-400 rounded-3xl">
        <div className="absolute shadow-2xl top-12 right-12 h-5/6 w-2/3 p-8 bg-red-400 rounded-3xl">
          hi how are you
        </div>
        <div className="absolute h-full w-2/4 -left-52 -top-42 shadow-2xl bg-white transform rotate-[45deg] rounded-xl">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="absolute h-1/2 w-1/2 right-10 top-12  transform -rotate-[45deg]  bg-cover bg-center rounded-full"
          ></div>
        </div>
        <div className="absolute top-2 right-4 h-20 w-6/12 bg-orange-300 p-4 rounded-lg flex justify-end items-center">
          <h1 className="text-2xl font-thin">Name</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
