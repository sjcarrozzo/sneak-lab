//local imports
const IMG_FOLDER = "../assets/images/";

const getImage = (file) => new URL(IMG_FOLDER + file, import.meta.url).href;

const delayTime = 800;

//fetch all products from database
export const fetchAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db);
    }, delayTime); //simulamos delay
  });
};

//decide and execute specific type of fetch: by category or brand
export const fetchWithParams = (filterType, filter) => {
  return filterType === "category"
    ? fetchByCategory(filter)
    : fetchByBrand(filter);
};

//filter products by category
const fetchByCategory = (filter) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db.filter((product) => product.category === filter));
    }, delayTime); //simulamos delay
  });
};

//filter products by brand
const fetchByBrand = (filter) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db.filter((product) => product.brand === filter));
    }, delayTime);
  });
};

//find the product by Id
export const fetchProductById = (productId) => {
  const id = Number(productId); //cast to number 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(db.find((product) => product.id === id));
    }, delayTime); //simulamos delay
  });
};

//database
const db = [
  {
    id: 1,
    category: "casual",
    brand: "nike",
    name: "Zapatillas Nike Airforce 1 white",
    price: 89.99,
    img: getImage("nike_4.png"),
    description:
      "Zapatillas urbanas icónicas con diseño limpio y atemporal. Fabricadas en cuero resistente, ofrecen gran comodidad y una suela robusta ideal para el uso diario.",
  },
  {
    id: 2,
    category: "casual",
    brand: "converse",
    name: "Converse all star white",
    price: 24.5,
    img: getImage("converse_5.png"),
    description:
      "Clásicas zapatillas de lona con perfil bajo y suela de goma vulcanizada. Un modelo versátil y liviano, perfecto para looks casuales y urbanos.",
  },
  {
    id: 3,
    category: "casual",
    brand: "adidas",
    name: "Adidas Super star white",
    price: 119.0,
    img: getImage("adidas_2.png"),
    description:
      "Zapatillas clásicas con puntera reforzada y diseño retro. Ofrecen durabilidad, comodidad y un estilo urbano inconfundible.",
  },
  {
    id: 4,
    category: "casual",
    brand: "vans",
    name: "Vans old school black",
    price: 50.0,
    img: getImage("vans_1.png"),
    description:
      "Zapatillas de skate con diseño icónico y suela waffle antideslizante. Brindan excelente agarre, resistencia y un look urbano auténtico.",
  },

  {
    id: 5,
    category: "training",
    brand: "nike",
    name: "Nike Zoom Black and Gray",
    price: 64.99,
    img: getImage("nike_1.png"),
    description:
      "Zapatillas de entrenamiento diseñadas para brindar estabilidad y amortiguación. Ideales para rutinas de gimnasio y actividades deportivas intensas.",
  },
  {
    id: 6,
    category: "training",
    brand: "adidas",
    name: "Adidas Training",
    price: 54.0,
    img: getImage("adidas_7.png"),
    description:
      "Zapatillas deportivas livianas con excelente soporte y ventilación. Pensadas para entrenamientos funcionales y uso activo diario.",
  },
  {
    id: 7,
    category: "training",
    brand: "new balance",
    name: "New Balance Training",
    price: 19.99,
    img: getImage("newbalance_4.png"),
    description:
      "Zapatillas de entrenamiento cómodas y flexibles, con buena amortiguación y ajuste seguro. Ideales para sesiones prolongadas y actividades indoor.",
  },
  {
    id: 8,
    category: "training",
    brand: "nike",
    name: "Nike Zoom Pink and Black",
    price: 33.99,
    img: getImage("nike_2.png"),
    description:
      "Zapatillas deportivas con diseño moderno y colores llamativos. Ofrecen confort, ligereza y buena respuesta para entrenamientos dinámicos.",
  },

  {
    id: 9,
    category: "basket",
    brand: "jordan",
    name: "Air Jordan 1 Mid",
    price: 74.5,
    img: getImage("jordan_1.png"),
    description:
      "Zapatillas icónicas de caña media inspiradas en el modelo original de 1985. Brindan soporte en el tobillo y una suela resistente ideal para basketball y streetwear.",
  },
  {
    id: 10,
    category: "basket",
    brand: "jordan",
    name: "Air Jordan 3 Retro",
    price: 12.99,
    img: getImage("jordan_2.png"),
    description:
      "Modelo legendario con unidad Air visible para una amortiguación superior. Combina rendimiento en cancha y estilo retro urbano.",
  },
  {
    id: 11,
    category: "basket",
    brand: "jordan",
    name: "Air Jordan 11 Low",
    price: 49.9,
    img: getImage("jordan_3.png"),
    description:
      "Zapatillas de perfil bajo con materiales premium y excelente retorno de energía. Diseñadas para el juego rápido y el uso diario.",
  },
  {
    id: 12,
    category: "basket",
    brand: "jordan",
    name: "Air Jordan 4 Retro",
    price: 29.99,
    img: getImage("jordan_4.png"),
    description:
      "Zapatillas clásicas con estructura firme, gran estabilidad y detalles icónicos. Ideales para rendimiento deportivo y estilo urbano auténtico.",
  },
]
