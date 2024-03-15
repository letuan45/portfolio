"use client";

import React, { useState } from "react";
import GradientStrokeButton from "../shared/ui/buttons/GradientStrokeButton";
import * as yup from "yup";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const mailSchema = yup
  .object({
    email: yup.string().required().email(),
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mailSchema),
  });

  const onSubmit = async (data: any) => {
    const { email, title, description } = data;

    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/sendmail`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            email,
            title,
            description: `<h5 style="font-size: 20px">${description}</h5>`,
          }),
        },
      );
      if (response.ok) {
        alert("Your data has been sent");
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto mb-8 w-full py-4 lg:px-24"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="my-5 font-kufam text-4xl font-semibold text-white"
        >
          Contact me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82 }}
          className="max-w-[800px] rounded-xl bg-cus-gray-100/25 px-8 py-6 backdrop-blur-sm max-sm:rounded-none max-sm:px-6"
        >
          <div className="flex gap-4 max-sm:flex max-sm:flex-col">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold text-cus-red first-letter:uppercase">
                {errors.email?.message}
              </p>
              <input
                {...register("email")}
                placeholder="Type your email"
                className="focus:glow-input min-w-[300px] rounded-lg border-2 border-cus-blue-200 bg-cus-blue-100/10 px-4 py-3 font-lato text-lg outline-none backdrop-blur-sm placeholder:text-cus-gray-100 max-md:min-w-[200px] max-sm:min-w-[100px]"
              />
              <p className="text-sm font-semibold text-cus-red first-letter:uppercase">
                {errors.title?.message}
              </p>
              <input
                {...register("title")}
                placeholder="Type your email title"
                className="focus:glow-input min-w-[300px] rounded-lg border-2 border-cus-blue-200 bg-cus-blue-100/10 px-4 py-3 font-lato text-lg outline-none backdrop-blur-sm placeholder:text-cus-gray-100 max-md:min-w-[200px] max-sm:min-w-[100px]"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-cus-red first-letter:uppercase">
                {errors.description?.message}
              </p>
              <textarea
                {...register("description")}
                className="focus:glow-input h-[94%] min-w-[350px] rounded-lg border-2 border-cus-blue-200 bg-cus-blue-100/10 px-4 py-3 font-lato text-lg outline-none backdrop-blur-sm placeholder:text-cus-gray-100 max-md:min-w-[250px] max-sm:w-full max-sm:min-w-[200px]"
                placeholder="Something you want to notice"
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between max-sm:flex-col">
            <p className="ml-3 font-kufam text-white max-sm:mb-2">
              My email: lelamtuan4501@gmail.com
            </p>
            <GradientStrokeButton>
              {isLoading ? "Sending..." : "Submit contact"}
            </GradientStrokeButton>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
