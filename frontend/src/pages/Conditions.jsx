import React from 'react'
import Title from "../components/Title";


const Conditions = () => {
  return (
    <div>
      <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"TERMS AND"} text2={"CONDITIONS"} />
      </div>
      <div className="my-10 flex-col flex justify-center items-center gap-6 text-gray-600 mb-28 px-4 md:px-20">
        <p className="text-lg">
          Last updated on Dec 2nd 2024 <br /> For the purpose of these Terms and
          Conditions, The term "we", "us", "our" used anywhere on this page
          shall mean Tamboli Bangle Store, whose operational office is Near More
          Jwellers, Chandan Nagar, Pune - 411014. "you", “your”, "user",
          “visitor” shall mean any natural or legal person who is visiting our
          website and/or agreed to purchase from us.
        </p>

        <div className="text-start max-w-7xl">
          <h2 className="font-semibold text-xl text-gray-700 mb-4">
            Authenticity
          </h2>
          <p className="text-lg">All our products are 100% original.</p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Damage Disclaimer
          </h2>
          <p className="text-lg">
            While we ensure the best packaging, we do not take responsibility
            for any damage that occurs during transit.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Non-Refundable & Non-Returnable
          </h2>
          <p className="text-lg">
            Products are final sale and cannot be returned, exchanged, or
            refunded. Please double-check your size and preferences before
            placing your order.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Delivery
          </h2>
          <p className="text-lg">
            Products are delivered within 3 working days.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Responsibility
          </h2>
          <p className="text-lg">
            Users are responsible for providing accurate shipping details.
          </p>

          <br />
          <p className="text-lg">
            If you have any questions about this policy, please reach out:
          </p>
          <p className="text-lg">
            Tel: +91 - 7666839558 <br /> Email: tousiftamboli3@gmail.com
          </p>
        </div>

        <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-6">
          Learn More
        </button>
      </div>
    </div>
    </div>
  )
}

export default Conditions
