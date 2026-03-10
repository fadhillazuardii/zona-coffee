import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CartSidebar = ({ isOpen, setIsOpen, cart, addToCart, decreaseCart }) => {
  // Hitung Total Harga
  const totalPrice = cart.reduce(
    (acc, item) => acc + parseInt(item.price.replace(".", "")),
    0,
  );

  // Kelompokkan item yang sama agar muncul jumlahnya (qty)
  const uniqueCart = Array.from(new Set(cart.map((item) => item.id))).map(
    (id) => {
      return {
        ...cart.find((item) => item.id === id),
        qty: cart.filter((item) => item.id === id).length,
      };
    },
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Gelap (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-[999]"
          />

          {/* Panel Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white z-[1000] shadow-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-bold text-amber-900">
                Pesanan Kamu
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-gray-500 hover:text-red-500"
              >
                <X />
              </button>
            </div>

            {/* List Barang */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {uniqueCart.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">
                  Wah, keranjang masih kosong nih ☕
                </p>
              ) : (
                uniqueCart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-stone-800">{item.name}</h3>
                      <p className="text-sm text-amber-900 font-semibold">
                        Rp {item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-full border">
                      <button
                        onClick={() => decreaseCart(item.id)}
                        className="text-amber-900 font-bold px-1"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm">{item.qty}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="text-amber-900 font-bold px-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Sidebar (Total & Checkout) */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>Total:</span>
                <span className="text-amber-900">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>
              <button
                className="w-full bg-amber-900 text-white py-4 rounded-xl font-bold hover:bg-amber-800 transition-colors active:scale-95"
                onClick={() => alert("Lanjut ke Pembayaran / WhatsApp?")}
              >
                Checkout Sekarang
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
