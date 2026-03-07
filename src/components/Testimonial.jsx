import React from "react";
import { motion } from "framer-motion";
import { TestimonialData } from "../data/testimonial";

const Testimonial = () => {
  return (
    <div id="testimonial" className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-center text-amber-900 text-4xl font-bold"
          >
            Testimonials
          </motion.h1>
        </div>
        {TestimonialData.map((data) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="my-6"
          >
            <div
              key={data.id}
              className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-amber-900/10 relative"
            >
              <div className="mb-4">
                <img src={data.img} alt="" className="rounded-full w-20 h-20" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 ">{data.text}</p>
                  <h1 className="text-xl font-bold text-black/80">
                    {data.name}
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
