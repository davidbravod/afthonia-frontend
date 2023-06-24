import Image from "next/image";
import Slider from "react-slick/lib/slider";

const clients = [
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png"
];
const Clients = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    autoplay:true,
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
      <div className="max-w-[1296px] mx-auto pb-[70px] lg:pb-[270px] pt-[70px] md:pt-[115px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] text-center mx-2 lg:mx-0">
            <h5 className="heading-5 text-[var(--color-primary)]">
              {"clients’s love"}
            </h5>
            <h2 className="heading-2 text-[#222] mt-2 mb:mt-4 mb-3">
              Our Trusted <span className="text-[var(--color-primary)]">{"Client's"}</span>
            </h2>
            <p className="paragraph-default mb-7 md:mb-10 text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {clients.map((item, index) => (
               <div className="text-center" key={index}>
               <Image src={item} height={50} width={218} alt="client images" />
             </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
