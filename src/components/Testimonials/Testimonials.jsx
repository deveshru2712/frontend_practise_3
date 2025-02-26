import React from "react";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut officiis explicabo aliquid ipsam architecto esse deleniti quasi dicta molestias.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jhon Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut officiis explicabo aliquid ipsam architecto esse deleniti quasi dicta molestias.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut officiis explicabo aliquid ipsam architecto esse deleniti quasi dicta molestias.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonials
            </p>
            <h1 className="text-3xl font-bold"> Testimonials</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              saepe voluptatem a, deleniti repudiandae reiciendis?
            </p>
          </div>
          {/* Testimonials section*/}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialsData.map((item) => (
                <div key={item.id} className="my-6 relative">
                  <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                    <p className="text-black/20 text-9xl font-serif absolute bottom-0 left-0 translate-y-1/2 rotate-180">
                      ,,
                    </p>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-full block mx-auto"
                    />
                    <p className="text-gray-500 text-sm">{item.text}</p>
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 -translate-y-1/2 right-0 ">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
