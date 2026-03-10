import React from "react";
import { motion } from "framer-motion";
import { MenuData } from "../data/menu";

const Menu = ({ addToCart }) => {
  return (
    <div id="menu" className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-4xl font-bold font-cursive text-amber-900"
          >
            Best Coffee for You
          </motion.h1>
        </div>
        {/* menu card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-10 place-items-center px-4">
          {MenuData.map((menu) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl duration-500 group max-w-[300px] min-h-[350px] mt-10"
            >
              {/* Image Section */}
              <div className="h-[100px]">
                <img
                  src={menu.img}
                  alt={menu.name}
                  className="w-[180px] h-[180px] object-contain block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300 drop-shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 pt-12 text-center">
                <h1 className="text-xl font-bold">{menu.name}</h1>
                <p className="text-gray-500 group-hover:text-white/80 duration-300 text-sm line-clamp-2 mt-2">
                  {menu.description}
                </p>

                <div className="flex justify-between mt-10 items-center gap-4 border-t border-gray-100 group-hover:border-amber-800 pt-4">
                  <p className="text-lg font-bold">Rp {menu.price}</p>
                  <button
                    // 3. Panggil fungsi addToCart saat di-klik
                    onClick={() => addToCart(menu)}
                    className="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-amber-900 transition-colors duration-300 active:scale-90"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
