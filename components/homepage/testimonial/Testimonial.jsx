import React, { useRef } from 'react';
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Slider from "react-slick";
import { testimonials } from "../../../data/testimonials";
import {motion} from 'framer-motion'

const Testimonial = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const previousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Call the slickPrev() function to move to the previous slide
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Call the slickNext() function to move to the next slide
    }
  };

  return (
    <section className="bg-[url('/images/testimonial/bg.png')] bg-white bg-left-bottom bg-no-repeat">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[115px] pb-[70px] md:pb-[120px]" style={{"margin-bottom":"80px"}}>
        <div className="flex justify-center mx-2 lg:mx-0">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px] text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">
              Testimonials
            </h5>
            <h2 className="heading-2 mb-5 mt-[14px]">
              What our <span className="text-[var(--color-primary)]">{"Clients"}</span> Say
            </h2>
            <p className="paragraph-default mb-9 md:mb-[55px] text-[#222]">
            Customer success is the heartbeat of our business.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <div className="mx-2 lg:mx-0 w-[290px] bg-white sm:w-[550px] lg:w-[850px] shadow-[0px_4px_24px_rgba(188,188,188,0.25)] rounded-xl">
            <Slider {...settings} ref={sliderRef}>
              {testimonials.map((item) => (
                <div
                  className="py-6 px-4 lg:px-20 lg:py-10 text-center text-[#222] flex flex-col justify-center items-center flex-col rounded-[10px]"
                  key={item.id}
                >
                  <div className="flex justify-center mb-5">
                    <Image
                      src={item.img}
                      height={200}
                      width={200}
                      className="rounded-full"
                      alt="Clients img "
                    />
                  </div>

                  <h5 className="heading-5">{item.name}</h5>
                  <p className="paragraph-default mb-2">
                    {item.designation}
                  </p>
                  <p className="paragraph-default">{item.review}</p>
                  <div className="flex gap-1 justify-center mt-5">
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                  </div>
                </div>
              ))}
            </Slider>
              <div className="flex justify-center pb-5">
                  <AiOutlineArrowLeft className="text-3xl mr-2" onClick={previousSlide}/>
                  <AiOutlineArrowRight className="text-3xl ml-2" onClick={nextSlide}/>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
