import React from "react";
import Navbar from "../components/Navbar";
import Slider from "infinite-react-carousel";
import CatCard from "../components/CatCard";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const slides = [
    { imageUrl: "/images/c.jpg", text: "Slide 1 Text" },
    { imageUrl: "/images/e.jpg", text: "Slide 2 Text" },
    { imageUrl: "/images/g.jpg", text: "Slide 2 Text" },
    { imageUrl: "/images/3.jpg", text: "Slide 3 Text" },
  ];

  const { data } = useSWR("http://localhost:5000/api/products/fetch", fetcher);
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="lg:h-[100vh] overflow-hidden">
        <Slider arrows={false} autoplay={true} autoplaySpeed={5000}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full">
              <img
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-fit"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <h2 className="text-4xl animate-fadeIn">{slide.text}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center py-4 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] p-5 ">
          <CatCard title={"Clothes"} img={"/images/c.jpg"} />
          <CatCard title={"Electronics"} img={"/images/e.jpg"} />
          <CatCard title={"Groceries"} img={"/images/g.jpg"} />
          <CatCard title={"Cosmetics"} img={"/images/co.jpeg"} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
