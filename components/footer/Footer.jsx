import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Social from "../Others/Social";
import {motion} from 'framer-motion'
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer/bg-shape.png')] relative bg-no-repeat bg-right-bottom bg-[#07112D]">
      <div className="max-w-[1296px] mx-auto pt-[30px] lg:pt-0">
        <div className="bg-[#1A4DBE] rounded-[10px] py-6 px-3 mx-2 xl:mx-0  mt-[40px] lg:mt-0 lg:-translate-y-1/2 md:p-[30px] lg:p-[60px] md:bg-[url('/images/footer/bg.png')] bg-no-repeat bg-right">
          <motion.h3 initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="text-white heading-3 mb-4 lg:mb-6">
            Start Your Business Now!{" "}
          </motion.h3>
          <p className="figure-caption text-white mb-4 lg:mb-[40px]">
            It will not take more than 10 minutes!
          </p>
          <form className="flex md:gap-8 md:px-4 px-3 py-2 justify-between bg-white max-w-xs rounded-full">
            <input
              className="bg-white focus:outline-none text-black"
              type="email"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="p-1 text-white md:p-2 rounded-full bg-[#FD5A3A] duration-300 hover:shadow-lg hover:shadow-[#ff52497a]">
              <HiArrowNarrowRight size={30} />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-12 mx-5 xl:mx-0 gap-5 pt-[70px] md:pt-[85px] mt-0 lg:-mt-[124px] lg:-pt-0 pb-[66px] md:pb-[120px] border-b-2 border-[#636363] text-white">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
            <div>
              <Image
                src="/logo-afthonia-blanco.png"
                height={60}
                width={180}
                alt="logo "
              />
            </div>
            <div className="flex gap-3 md:gap-5">
              <HiOutlineMail className="shrink-0 text-2xl md:text-3xl" />
              <a href="mailto:support@afthoniaent.com" className="paragraph-default text-white">
                support@afthoniaent.com
              </a>
            </div>
            <div className="flex gap-3 md:gap-5">
              <FiPhone className="shrink-0 text-2xl md:text-3xl" />
              <a href="tel:+17548026363" className="paragraph-default text-white">
                +1 754 802 6363
              </a>
            </div>
            <address className="flex gap-3 md:gap-5 not-italic">
              <SlLocationPin className="shrink-0 text-2xl md:text-3xl" />
              <p className="paragraph-default text-white max-w-[264px]">
                7901 4TH ST N STE 300. ST. PETERSBURG, FL. 33702
              </p>
            </address>
          </div>
          <div className="col-span-12 flex flex-col paragraph-default gap-4 md:col-span-6 lg:col-span-3">
            <h5 className="heading-5 text-white mt-2 md:mt-0">Overview</h5>
            <div className="flex gap-1 text-[#C0C0C0] flex-col">
              { [["Home", ""], ["Pricing", "pricing"], ["Contact","contact"], ["About", "about"]].map(
                ([title, link]) => (
                  <Link href={`/${link}`} key={title}>
                    <a className="hover:translate-x-1 hover:text-[var(--color-primary)] duration-300">{title}</a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-span-12 flex flex-col paragraph-default gap-4 md:col-span-6 lg:col-span-3">
            <Link href="/service"><a><h5 className="heading-5 text-white mt-2 md:mt-0">Services</h5></a></Link>
            <div className=" inline-flex gap-1 text-[#C0C0C0] flex-col">
              {[["Business Formation", ""], ["Registered Agent", ""],["EIN Application", ""],["Web Hosting", ""], ["More...", "service"]].map(([title, url]) => (
                <Link href={`/${url}`} key={title}>
                  <a className="hover:translate-x-1 hover:text-[var(--color-primary)] duration-300">{title}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-col paragraph-default gap-4 md:col-span-6 lg:col-span-2">
            <h5 className="heading-5 text-white mt-2 md:mt-0">Policy</h5>
            <div className="flex gap-1 text-[#C0C0C0] flex-col">
              {[
                ["Privacy Policy","#"],
                ["Terms of Service", "#"],
                ["Cancellation", "#"],
                ["Refferral Policy", "#"],
              ].map(([title,url]) => (
                <Link href={`/${url}`} key={title}>
                  <a className="hover:translate-x-1 hover:text-[var(--color-primary)] duration-300">{title}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5 mx-3">
          <p className="text-[#B4B4B4] figure-caption">
            © 2023 Afthonia Enterprises LLC. All Rights Reserved.
          </p>
          <div>
            <Social classes="text-white" size={35} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
