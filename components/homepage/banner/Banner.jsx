import React, { useContext, useEffect } from "react";
import CountUp from "react-countup";
import { Context } from "../../../store/appContext";
import { bannerStates } from "../../../data/bannerstate";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedLink from "../../Others/AnimatedLink";
import BannerImg from "../../../public/images/banner/rocket.png";

const Banner = () => {

  return (
    <>
    <header className="relative bg-[#FFFDFA] ">
      <div className="xl:bg-[url('/images/banner/bg.png')] bg-no-repeat bg-right-top">
        <div className="max-w-[1296px] mx-auto pt-32 xl:-mb-[55px] lg:pt-[215px] flex">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-3 xl:mx-0 mb-16 md:mb-20"
          >
            <div className="max-w-[690px]">
              <h3 className="heading-4 text-[var(--color-primary)] mb-2">
                Less than 10 minutes!
              </h3>
              <h1 className="heading-1 text-[#222]">
                Form Your <br/>Business With{" "}
                <span className="text-[var(--color-primary)]">Us.</span>{" "}
              </h1>
              <p className="paragraph-large text-[#222222] mb-6 md:mb-8">
                It shouldn't be that hard, right? We will help you form your business and it will take no more than 10 minutes.
              </p>
            </div>

            <AnimatedLink
              link="http://localhost:3000/signup"
              name="Get Started Now"
              classes="paragraph-default"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0.5 }}
            animate={{ x: -100, y: -100, opacity: 1 }}
            exit={{ x: 0, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className="hidden relative -right-44 lg:block md:pt-0"
          >
            <Image height={650} width={600} src={BannerImg} alt="banner img" />
          </motion.div>
        </div>
        <div className="hidden xl:block xl:bottom-16 absolute -bottom-2 left-0">
          <Image
            src="/images/banner/shape.png"
            height={306}
            width={406}
            alt="banner shape"
          />
        </div>
      </div>
    </header>
    <div className="lg:-translate-y-1/2 px-1 max-w-[1077px] mx-auto">
        <div className="flex gap-5 mx-2 xl:mx-0 md:gap-0 flex-wrap px-3 bg-white justify-around  md:my-0 rounded-none md:rounded-lg shadow-lg pt-8 pb-9">
          {bannerStates.map((item, index) => (
            <div className="flex flex-col items-center" key={item.title}>
              <h4 className="text-[var(--color-primary)] heading-4 mb-1">
                <CountUp end={item.number} />
                <span className="text-[var(--color-primary)]">+</span>
              </h4>
              <p className="paragraph-default">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default Banner;
