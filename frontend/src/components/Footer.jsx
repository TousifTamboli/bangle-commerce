import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo2} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Crafting beauty and elegance for your wrists. Shop premium bangles
            for every occasion.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">PAGES</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-7666839558</li>
            <li>tousiftamboli3@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-center">
          Copyright 2024@ Tousif - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
