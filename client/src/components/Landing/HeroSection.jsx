import React from "react";
import img from "../../assets/img.jpg"; // अपना इमेज पाथ यहाँ दें
import Header from "./Header";
import Footer from "./Footer";

const HeroSection = () => {
  return (
    <>
      <Header />

      <section className="flex flex-col md:flex-row items-center p-10 bg-white">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-6xl font-bold">
            Power and{" "}
            <span className="text-yellow-400">
              Success <br />
            </span>{" "}
            <span className="text-yellow-400">Inspired</span> Life
          </h1>
          <p className="text-gray-700 text-lg">
            Knowledge is the greatest wealth. Financial security is the
            foundation <br /> of a peaceful life. Along with this, when there is
            mutual cooperation <br /> and mutual trust, our life becomes very
            beautiful.
          </p>
          <p className="text-gray-700 text-lg">
            Thank you for choosing us as your gateway to a secure life.
          </p>
          <p className="text-gray-700 text-lg">
            {" "}
            Let’s travel together, have a better tomorrow.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-900 text-white px-8 py-2 rounded-sm">
              Online Courses
            </button>
            <button className="border-2 border-black px-10 text-semibold py-2 rounded-sm">
              Videos
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={img}
            alt="Team working"
            className="w-full rounded-tl-[100px] rounded-br-[100px]  shadow-lg"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HeroSection;
