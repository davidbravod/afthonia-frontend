import { priceplan } from "../../data/priceplan"
import { CgCheckO } from "react-icons/cg";
import Image from "next/image";
import {motion} from 'framer-motion'
import Link from "next/link";

const PricingPage = () => {
  return (
    <section className="bg-[url('/images/pricing/map-bg.png')] bg-white bg-bottom bg-no-repeat h-full">
      <div className="max-w-[1296px] mx-auto pt-16 md:pt-[115px] pb-[70px] md:pb-[120px]" style={{"padding-top":"40px", "margin-bottom":"60px"}}>
        <div className="flex justify-center mx-2 xl:mx-0">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px] text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">Pricing</h5>
            <h2 className="heading-2 my-2">
              <span className="text-[var(--color-primary)]">Choose</span> Your Plan
            </h2>
            <p className="paragraph-default mb-10 md:mb-[57px]">
              All our plans include everything you need to start your business!
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center flex-col flex-wrap md:flex-row gap-6">
          {priceplan.map(({ id, title, price, bg, features }) => (
            <div
              className="max-w-[416px] sm:w-[416px] mx-3 sm:mx-auto lg:mx-0 shadow-lg rounded-b-lg relative"
              key={id}
            >
              <div className="absolute w-20 md:w-32 top-0 right-0">
                <Image src={bg} width={140} height={120} alt="bg" />
              </div>
              <div
                className={` px-[30px] pt-[23px]  pb-4 rounded-t-lg ${
                  id == 1 && "bg-[#1A4DBE]"
                } ${id == 2 && "bg-[var(--color-primary)]"} ${id == 3 && "bg-[#1A4DBE]"} `}
              >
                <h5 className="text-white heading-5 ">
                  {title}
                </h5>
                <h3
                  className={`${id == 1 && "text-[#FF9300]"} ${
                    id == 3 && "text-[#FF9300]"
                  } heading-3 ${id == 2 && "text-white"}`}
                >
                  ${price}{" "}
                  <span className="text-white text-base font-normal">
                    + state fee / year
                  </span>
                </h3>
              </div>
              <div className="pt-3 md:pt-[18px] pb-5 md:pb-[32px] px-[30px] rounded-b-lg bg-white">
                <ul>
                  {features.map((item, i) => (
                    <li
                      className="flex gap-5 border-b paragraph-default text-[#222] py-2 md:py-4 items-center"
                      key={i}
                    >
                      <CgCheckO color="#FF9300" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center pt-7 md:pt-[40px] pb-2">
                  <Link href="http://localhost:3000/signup">
                  <button
                    type="button"
                    className={`px-8 figure-caption py-3 border text-[#222] rounded-md border-black hover:bg-[#FF5A42] hover:text-white hover:border-[#FF5A42] hover:shadow-lg hover:shadow-[#ff5b425e] duration-300`}
                  >
                    Select Plan
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
