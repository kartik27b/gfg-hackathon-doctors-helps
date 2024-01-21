import React from "react";
import doctor from "../../assets/doctor.png";
import flower from "../../assets/Flower.png";

const Hero = () => {
  return (
    <section class="bg-[#F2F4EA] h-screen">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-4xl md:text-8xl font-serif font-semibold">
            Healthcare <br />
            When All else{" "}
            <p className="flex item-center mb-0">
              Fails{" "}
              <img
                src={flower}
                alt="mockup"
                className="w-8 h-8 md:w-16 md:h-16"
              />
            </p>
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">
            Introducing our innovative video call service, bringing healthcare
            to your fingertips. Connect with qualified doctors from the comfort
            of your home, ensuring convenient and timely medical consultations.
            Experience personalized care, discuss symptoms, and receive
            professional advice seamlessly. Your well-being is our priority, now
            just a click away.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3  font-medium text-center  border border-gray-300 rounded-lg text-white bg-green-900 hover:text-white"
          >
            Find Your Doctor
          </a>
        </div>
        <div class=" mt-6 md:mt-0 lg:col-span-5 lg:flex">
          <img src={doctor} alt="mockup" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
