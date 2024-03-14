import React from "react";
import GradientStrokeButton from "../shared/ui/buttons/GradientStrokeButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto mb-8 w-full py-4 lg:px-24"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-5 font-kufam text-4xl font-semibold text-white">
          Contact me
        </h2>
        <form className="max-w-[800px] rounded-xl bg-cus-gray-100/25 px-8 py-6 backdrop-blur-sm max-sm:rounded-none max-sm:px-6">
          <div className="flex gap-4 max-sm:flex max-sm:flex-col">
            <div className="flex flex-col gap-4">
              <input
                placeholder="Type your email"
                className="focus:glow-input min-w-[300px] rounded-lg border-2 border-cus-blue-200 bg-cus-blue-100/10 px-4 py-3 font-lato text-lg outline-none backdrop-blur-sm placeholder:text-cus-gray-100 max-md:min-w-[200px] max-sm:min-w-[100px]"
              />
              <input
                placeholder="Type your email title"
                className="focus:glow-input min-w-[300px] rounded-lg border-2 border-cus-blue-200 bg-cus-blue-100/10 px-4 py-3 font-lato text-lg outline-none backdrop-blur-sm placeholder:text-cus-gray-100 max-md:min-w-[200px] max-sm:min-w-[100px]"
              />
            </div>
            <textarea
              className="focus:glow-input min-w-[350px] rounded-lg border-2 border-cus-blue-200 bg-cus-blue-100/10 px-4 py-3 font-lato text-lg outline-none backdrop-blur-sm placeholder:text-cus-gray-100 max-md:min-w-[250px] max-sm:min-w-[150px]"
              placeholder="Something you want to notice"
            />
          </div>
          <div className="mt-4 flex items-center justify-between max-sm:flex-col">
            <p className="ml-3 font-kufam text-white max-sm:mb-2">
              My email: lelamtuan4501@gmail.com
            </p>
            <GradientStrokeButton>Submit contact</GradientStrokeButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
