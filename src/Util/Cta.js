const img = (path) => `/img/${path}`;
export const categories = [
  {
    id: 1,
    name: "사이버트럭",
    img: {
      src: img("Cta-car-1.png"),
      alt: "사이버트럭",
    },
  },
  {
    id: 2,
    name: "모델3",
    img: {
      src: img("Cta-car-2.png"),

      alt: "모델3",
    },
  },
  {
    id: 3,
    name: "모델X",
    img: {
      src: img("Cta-car-3.png"),

      alt: "모델X",
    },
  },
  {
    id: 4,
    name: "모델S",
    img: {
      src: img("Cta-car-4.png"),

      alt: "모델S",
    },
  },
  {
    id: 5,
    name: "모델Y",
    img: {
      src: img("cCta-car-5.png"),

      alt: "모델Y",
    },
  },
  
];

export default categories;