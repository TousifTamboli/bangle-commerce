import React from "react";
import Title from "../components/Title";

const Refund = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CANCELLATION &"} text2={"REFUND POLICY"} />
      </div>
      <div className="my-10 flex-col flex justify-center items-center gap-6 text-gray-600 mb-28 px-4 md:px-20">
        <p className="text-lg">
          Last updated on Dec 2nd 2024 <br />
          Tamboli Bangle Store believes in helping its customers as far as possible, and has
          therefore a liberal cancellation policy. Under this policy:
        </p>

        <div className="text-start max-w-7xl">
          <h2 className="font-semibold text-xl text-gray-700 mb-4">
            Order Cancellation
          </h2>
          <p className="text-lg">
            All orders are final and cannot be canceled once placed. We request
            our customers to carefully review their selections, including size
            and product details, before confirming the order.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Refund Policy
          </h2>
          <p className="text-lg">
            We follow a strict <b>non-refundable policy</b>. Once payment has been
            successfully processed, refunds cannot be initiated under any
            circumstances.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Exchange or Return
          </h2>
          <p className="text-lg">
            All products are <b>non-exchangeable and non-returnable</b>. Kindly
            ensure accurate size and product selection at the time of purchase.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Damage Disclaimer
          </h2>
          <p className="text-lg">
            While we ensure secure packaging for all products, we do not take
            responsibility for damages that occur during transit.
          </p>

          <br />
          <p className="text-lg">For further assistance, please contact us:</p>
          <p className="text-lg">
            Tel: +91 - 7666839558 <br /> Email: tousiftamboli3@gmail.com
          </p>
        </div>

        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-6">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Refund;
