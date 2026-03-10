import React from "react";
import AboutImg from "../assets/aboutImg.jpg"; // Foto cangkir latte art abang
import BgPattern from "../assets/bgPattern.jpg"; // Pattern kopi abang
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${BgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px", // Atur ukuran pattern agar tidak terlalu besar
      }}
    >
      {/* Overlay Putih agar pattern jadi samar dan mewah */}
      <div className="absolute inset-0 bg-white/90 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Bagian Foto (AboutImg) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dekorasi bingkai di belakang foto agar tidak kosong */}
            <div className="absolute -top-6 -left-6 w-full h-full border-8 border-amber-900/10 rounded-2xl -z-10"></div>

            <img
              src={AboutImg}
              alt="Latte Art Zona Coffee"
              className="w-full max-w-[450px] rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 object-cover border-4 border-white"
            />
          </motion.div>

          {/* Bagian Teks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold text-amber-950 font-cursive leading-tight">
              Dibuat Dengan Sepenuh Hati
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed italic">
              "Setiap tegukan adalah cerita tentang ketelitian dan rasa."
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Di Zona Coffee, kami tidak hanya menyeduh kopi, kami meracik
              pengalaman. Dari pemilihan biji hingga teknik *latte art* yang
              presisi, kami pastikan harimu dimulai dengan semangat yang benar.
            </p>

            <a href="#menu">
              <button className="bg-amber-900 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-800 shadow-lg transition-transform active:scale-95">
                Lihat Koleksi Kami
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
