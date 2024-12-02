import React from "react";
import Title from "../components/Title";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"PRIVACY"} text2={"POLICY"} />
      </div>
      <div className="my-10 flex-col flex justify-center items-center gap-6 text-gray-600 mb-28 px-4 md:px-20">
        <p className="text-lg">
          At <span className="font-semibold">TAMBOLI BANGLES</span>, your
          privacy is our priority. This Privacy Policy explains how we collect,
          use, and protect your information when you use our website.
        </p>

        <div className="text-start max-w-3xl">
          <h2 className="font-semibold text-xl text-gray-700 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information such as your name, email address,
            phone number, billing/shipping address, and payment details when you
            place an order or interact with our services.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information to process orders, communicate updates,
            improve our website, and comply with legal requirements.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            3. Sharing Your Information
          </h2>
          <p>
            Your data is shared only with trusted partners like payment
            processors and shipping providers. We do not sell or rent your
            information to third parties.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            4. Data Security
          </h2>
          <p>
            We implement secure technologies to protect your data, but no system
            is 100% secure. We recommend using strong passwords and protecting
            your account credentials.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            5. Your Rights
          </h2>
          <p>
            You can access, update, or request deletion of your data. Opt out of
            marketing communications anytime by using the unsubscribe link in
            our emails.
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            6. Product Related
          </h2>
          <p>
          We Do Not take responsibility on Glass Bangle's Damages and all the Products are non Refundable
          </p>

          <h2 className="font-semibold text-xl text-gray-700 mt-6 mb-4">
            7. Contact Us
          </h2>
          <p>If you have any questions about this policy, please reach out:</p>
          <p>
            Tel: +91 - 7666839558 <br /> Email: tousiftamboli3@gmail.com
          </p>
        </div>

        {/* <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 mt-6">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
