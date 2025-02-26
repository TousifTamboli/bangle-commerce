import React from 'react'
import Title from "../components/Title";


const Shipping = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"SHIPPING &"} text2={"DELIVERY POLICY"} />
      </div>
      <div className="my-10 flex-col flex justify-center items-center gap-6 text-gray-600 mb-28 px-4 md:px-20">
        <p className="text-lg">
          Please read our Shipping Rules<br />
          Last updated on Dec 2nd 2024 
        </p>

        <div className="text-start max-w-7xl">
          <h2 className="font-semibold text-xl text-gray-700 mb-4">Shipping</h2>
          <p className="text-lg">
            All orders are processed within <b>2 working day</b> of receiving
            payment confirmation. Orders are shipped using reliable delivery
            partners to ensure timely and safe delivery.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Delivery Time
          </h2>
          <p className="text-lg">
            Products will be delivered within <b>3 working days</b> from the date
            of shipping. Delivery timelines may vary based on location and
            unforeseen circumstances such as natural calamities or logistical
            delays.
          </p>
          
          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Delivery Area
          </h2>
          <p className="text-lg">
            For Now we only deliver in Areas of Chandan-nagar, Anand Park, Wadgaon Sheri, Viman Nagar, Kharadi, Kalyani Nagar.
            If you enter Address apart from this you will be notifed.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Best Condition Guarantee
          </h2>
          <p className="text-lg">
            We strive to deliver all products in their best condition. However,
            we do not take responsibility for damages incurred during transit.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Shipping Responsibility
          </h2>
          <p className="text-lg">
            Customers are responsible for providing accurate shipping details.
            We will not be liable for failed deliveries due to incorrect
            information provided by the customer.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            Shipping Charges
          </h2>
          <p className="text-lg">
            Any applicable shipping charges will be displayed during the
            checkout process. Free shipping may be offered for orders exceeding
            a certain amount, subject to promotional terms.
          </p>

          <br />
          <p className="text-lg">
            If you have any questions or concerns about shipping and delivery,
            please contact us:
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
  )
}

export default Shipping
