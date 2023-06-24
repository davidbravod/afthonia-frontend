import Image from "next/image";
import Slider from "react-slick";
import {motion} from 'framer-motion'

const clients = [
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
];
const Clients = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1296px] mx-auto pt-16 md:pt-[115px] pb-[70px] md:pb-[111px]">
        <div className="flex mx-2 xl:mx-0 justify-center">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px] text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">
              Appreciation moment
            </h5>
            <h2 className="heading-2 mb-3 mt-2 md:mt-[13px]">
              Our Trusted <span className="text-[var(--color-primary)]">{"Clients"}</span>
            </h2>
            <p className="paragraph-default mb-9 md:mb-[57px]">
              We are really proud of the people we work for:
            </p>
          </motion.div>
        </div>

        <div>
          <Slider {...settings}>
            {clients.map((item, index) => (
              <div className="text-center  w-full" key={index}>
                <Image
                  src={item}
                  height={50}
                  width={218}
                  className="block mx-auto border w-48 h-20"
                  alt="client images"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
