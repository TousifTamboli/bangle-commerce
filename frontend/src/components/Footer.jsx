import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo2} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
          Crafting beauty and elegance for your wrists. Shop premium bangles for every occasion.
          <br></br>
          Business name: TOUSIF MALANG TAMBOLI<br></br>
          Brand name: Tamboli Bangle's Store
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">PAGES</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">About us</Link>
            </li>
            {/* <li>
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li> */}
            <li>
              <Link to="/conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/refund">Cancellation/Refund Policy</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping & Delivery</Link>
            </li>
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
          Copyright 2024@ Tamboli Bangle's Store - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
