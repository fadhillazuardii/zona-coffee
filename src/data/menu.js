// Import semua gambar dari folder assets dulu
import Coklat from "../assets/es-Coklat.jpg";
import AmericanoImg from "../assets/americano.jpg";
import EsKopiAren from "../assets/es-kopi-aren.jpg";

// Export datanya sebagai array
export const MenuData = [
  {
    id: 1,
    name: "Coklat",
    img: Coklat, 
    price: "25.000",
    description: "Ekstrak kopi murni dengan aroma kuat.",
  },
  {
    id: 2,
    name: "Americano",
    img: AmericanoImg,
    price: "28.000",
    description: "Espresso dengan tambahan air panas.",
  },
  {
    id: 3,
    name: "Es Kopi Aren",
    img: EsKopiAren,
    price: "35.000",
    description: "Espresso dengan susu steam dan foam lembut.",
  },
];