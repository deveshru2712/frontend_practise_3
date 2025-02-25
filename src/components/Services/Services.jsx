import React from "react";
import Img1 from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani3.png";

const servicesData = [
  {
    id: 1,
    img: Img1,
    name: "Biryani",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus iusto sapiente, provident debitis, asperiores sequi adipisci recusandae repellendus aliquam quis animi suscipit? Omnis sed aliquam dolor deleniti, odio officiis?",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus iusto sapiente, provident debitis, asperiores sequi adipisci recusandae repellendus aliquam quis animi suscipit? Omnis sed aliquam dolor deleniti, odio officiis?",
  },
  {
    id: 3,
    img: Img3,
    name: "Cold Coffee",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit temporibus iusto sapiente, provident debitis, asperiores sequi adipisci recusandae repellendus aliquam quis animi suscipit? Omnis sed aliquam dolor deleniti, odio officiis?",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
              nostrum eos? Blanditiis dolore laborum, sunt vitae quis dicta.
              Nam, maiores optio. Non quam deleniti voluptatum reprehenderit aut
              laboriosam facere illo.
            </p>
          </div>
          {/* card section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {servicesData.map((item) => (
                <div
                  key={item.id}
                  className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl "
                >
                  <div className="h-[100px]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="max-w-[220px] mx-auto block transform -translate-y-14 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="text-gray-500 text-sm line-sm line-clamp-2 group-hover:text-white duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
