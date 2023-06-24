import Image from "next/image";
import { solution } from "../../../data/solution";
import {motion} from 'framer-motion'

const Solution = () => {
  return (
    <section className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto pt-[60px] pb-[70px] md:pt-[112px] md:pb-[120px]" style={{"padding-bottom":"40px"}}>
        <div className="flex justify-center mx-2 lg:mx-0 mb-10 md:mb-[60px]">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-3xl text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">All-In-One Platform</h5>
            <h2 className="heading-2 mx-2 lg:mx-0 mt-[13px] mb-2 md:mb-[20px]">
              Everything What Your{" "}
              <span className="text-[var(--color-primary)]">Business </span>Needs
            </h2>
            <p className="paragraph-default">
            Not only your business formation but everything you will need {" "}
              <br />
              to start right away: domain, business email, website and more!
            </p>
          </motion.div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-6 2xl:-ml-36 mx-3 xl:mx-0">
            <Image
              src="/images/solution/bg.png"
              width={1000}
              height={650}
              alt="solution bg image"
            />
          </div>
          <div className="col-span-12 mx-3 xl:mx-0 flex flex-col mt-5 md:mt-0 gap-6 lg:col-span-6">
            {solution.map(({ id, desc, icon, title }) => (
              <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}}
                className={`p-4 md:px-[30px] md:pt-[30px] md:pb-[25px] flex flex-col md:flex-row gap-4 xl:gap-[30px] rounded-lg ${
                  id == 1 && "bg-[#EDEFF5]"
                } ${id == 2 && "bg-[#FFF0EC]"} ${id == 3 && "bg-[#FFF5E6]"}`}
                key={id}
              >
                <div
                  className={`${id == 1 && "bg-[#1A4DBE]"} ${
                    id == 2 && "bg-[var(--color-primary)]"
                  } ${
                    id == 3 && "bg-[#FF9300]"
                  } p-4 xl:p-[20px]  rounded w-20 h-[72px]`}
                >
                  <Image src={icon} width={80} height={80} alt="icon" />
                </div>
                <div className="text-[#222]">
                  <h5 className="heading-5 mb-3">{title}</h5>
                  <p className="paragraph-default">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
