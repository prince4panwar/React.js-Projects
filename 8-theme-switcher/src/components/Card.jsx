import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="px-10 pb-5">
        <a href="https://github.com/prince4panwar">
          <img
            className="py-12 rounded-t-lg"
            src="https://plus.unsplash.com/premium_photo-1682088495148-bd26927bbaf7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product_image1"
          />
        </a>
        <div className="flex items-center justify-between">
          <span className=" dark:text-white ">Prince Panwar</span>
          <a
            href="https://www.linkedin.com/in/princepanwar4/"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
