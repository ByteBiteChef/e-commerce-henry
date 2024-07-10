import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  { 
    id: 1,
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-11-purple.png?v=c55f0ca6",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.apple.com/v/macbook-air/s/images/overview/performance/compare/model_mba_m2__cfrbip6c05yq_large_2x.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SY300_SX300_.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.apple.com/v/apple-watch-series-9/d/images/overview/carbon/carbon_neutral_hw__dfj0zzursu4i_small_2x.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://m.media-amazon.com/images/I/61kt+fd7JuL._AC_SL1500_.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://www.apple.com/v/homepod-mini/i/images/overview/hero_homepod__cnpc7icpf1aq_small_2x.png",
    categoryId: 6,
    stock: 10,
  },
  {
  id: 7,
  name: "Apple TV 4K",
  price: 179,
  description:
    "Experience stunning visuals and immersive sound with the Apple TV 4K: enjoy your favorite shows and movies in 4K HDR, and access a wide variety of apps and games on the App Store. Transform your living room with the power of Apple TV 4K.",
  image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=1076&hei=1070&fmt=jpeg&qlt=90&.v=1664896361408",
  categoryId: 7,
  stock: 10,
},
{
  id: 8,
  name: "Magic Keyboard",
  price: 99,
  description:
    "Enhance your typing experience with the Magic Keyboard: sleek design, responsive keys, and a rechargeable battery make the Magic Keyboard the perfect companion for your Mac. Type with comfort and precision with the Magic Keyboard.",
  image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3F?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010488000",
  categoryId: 9,
  stock: 10,
},
{
  id: 9,
  name: "iMac 24-inch",
  price: 1299,
  description:
    "Revolutionize your workspace with the iMac 24-inch: stunning Retina display, powerful M1 chip, and a range of vibrant colors make the iMac the ultimate all-in-one desktop computer. Experience the future of computing with the iMac 24-inch.",
  image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-imac-24-blue-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1639423360000",
  categoryId: 2,
  stock: 10,
},
{
  id: 10,
  name: "Magic Mouse",
  price: 79,
  description:
    "Navigate with ease using the Magic Mouse: sleek, ergonomic design, multi-touch surface, and a rechargeable battery make the Magic Mouse the perfect addition to your workspace. Experience smooth and precise control with the Magic Mouse.",
  image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1626468075000",
  categoryId: 9,
  stock: 10,
},
{
  id: 11,
  name: "iPhone SE",
  price: 399,
  description:
    "Compact yet powerful, the iPhone SE: enjoy fast performance, excellent camera quality, and the familiar Home button in a pocket-friendly design. Discover the perfect balance of power and size with the iPhone SE.",
  image:
    "https://m.media-amazon.com/images/I/61TOWf11+jL._AC_SX342_SY445_.jpg",
  categoryId: 1,
  stock: 10,
},
{
  id: 12,
  name: "Mac Mini",
  price: 699,
  description:
    "Maximize your workspace with the Mac Mini: compact design, powerful M1 chip, and versatile connectivity options make the Mac Mini a powerful desktop computer in a small package. Unleash your productivity with the Mac Mini.",
  image:
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038314708",
  categoryId: 2,
  stock: 10,
},
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
