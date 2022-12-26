// all images imported from images directory
import product_01_image_01 from "../images/handsome-bartender-making-drinking-cocktails-counter.jpg";
//import product_01_image_02 from "../images/product_01.1.jpg";
//import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/cold-cocktails-different-colors-table.jpg";
//import product_02_image_02 from "../images/product_2.2.jpg";
//import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/delicious-indian-food-tray.jpg";
//import product_03_image_02 from "../images/product_3.2.jpg";
//import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/delicious-chicken-table.jpg";
//import product_04_image_02 from "../images/product_4.2.jpg";
//import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/quickbites.jpg";
// import product_05_image_02 from "../images/product_08.jpg";
// import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bakery.jpg";
// import product_06_image_02 from "../images/bread(2).png";
// import product_06_image_03 from "../images/bread(3).png";

import product_07_image_01 from "../images/handsome-bartender-making-drinking-cocktails-counter.jpg";
//import product_01_image_02 from "../images/product_01.1.jpg";
//import product_01_image_03 from "../images/product_01.3.jpg";

import product_08_image_01 from "../images/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon.jpg";
//import product_02_image_02 from "../images/product_2.2.jpg";
//import product_02_image_03 from "../images/product_2.3.jpg";

import product_09_image_01 from "../images/portrait-beautiful-blond-woman-with-long-hair-makeup-brushes-near-attractive-face.jpg";
//import product_03_image_02 from "../images/product_3.2.jpg";
//import product_03_image_03 from "../images/product_3.3.jpg";

import product_10_image_01 from "../images/stylish-groom.jpg";
//import product_04_image_02 from "../images/product_4.2.jpg";
//import product_04_image_03 from "../images/product_4.3.png";

import product_11_image_01 from "../images/studio-portrait-attractive-fitness-couple-holds-barbell-dumbbells-sit-wooden-box-dark-grey-background.jpg";
// import product_05_image_02 from "../images/product_08.jpg";
// import product_05_image_03 from "../images/product_09.jpg";

import product_12_image_01 from "../images/young-beautiful-woman-doing-yoga-nature.jpg";
// import product_06_image_02 from "../images/bread(2).png";
// import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Night life",
    price: 24.0,
    image01: product_01_image_01,
    //image02: product_01_image_02,
    //image03: product_01_image_03,
    category: "Restaurants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Bevarages",
    // price: 115.0,
    image01: product_02_image_01,
    // image02: product_02_image_02,
    // image03: product_02_image_03,
    category: "Restaurants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Veg",
    price: 110.0,
    image01: product_03_image_01,
    // image02: product_03_image_02,
    // image03: product_03_image_03,
    category: "Restaurants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Non-veg",
    price: 110.0,
    image01: product_04_image_01,
    // image02: product_04_image_02,
    // image03: product_04_image_03,
    category: "Restaurants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Quick Bites",
    price: 24.0,
    image01: product_05_image_01,
    // image02: product_05_image_02,
    // image03: product_05_image_03,
    category: "Restaurants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Bakery",
    price: 24.0,
    image01: product_06_image_01,
    //image02: product_01_image_02,
    //image03: product_01_image_03,
    category: "Restaurants",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Salloon",
    price: 115.0,
    image01: product_07_image_01,
    // image02: product_02_image_01,
    // image03: product_02_image_03,
    category: "Personal-Care",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Beauty-Parlour",
    price: 110.0,
    image01: product_08_image_01,
    // image02: product_03_image_01,
    // image03: product_03_image_03,
    category: "Personal-Care",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Bridal-Makeup",
    price: 110.0,
    image01: product_09_image_01,
    // image02: product_04_image_01,
    // image03: product_04_image_03,
    category: "Personal-Care",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Groom-Makeup",
    price: 24.0,
    image01: product_10_image_01,
    // image02: product_05_image_01,
    // image03: product_05_image_03,
    category: "Personal-Care",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Gym",
    price: 35.0,
    image01: product_11_image_01,
    // image02: product_06_image_02,
    // image03: product_06_image_03,
    category: "Personal-Care",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Yoga",
    price: 35.0,
    image01: product_12_image_01,
    // image02: product_06_image_01,
    // image03: product_06_image_03,
    category: "Personal-Care",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  // {
  //   id: "13",
  //   title: "Loaf Bread ",
  //   price: 35.0,
  //   image01: product_06_image_03,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
];

export default products;
