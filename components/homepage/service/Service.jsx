import Image from "next/image";
import AnimatedLink from "../../Others/AnimatedLink";
import {motion} from 'framer-motion'

const Service = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1296px] mx-auto pt-[65px] pb-[65px] md:pb-[85px] md:pt-[115px]">
        <div className="flex justify-center">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px]  text-center mx-3 lg:mx-0">
            <h5 className="heading-5 text-[var(--color-primary)]">
              Digital Marketing
            </h5>
            <h2 className="heading-2 mt-[18px] mb-2">
              Service We Provide
            </h2>
            <p className="paragraph-default mb-6 md:mb-[55px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              mattis dui eget vestibulum id et. It’s about ranking
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row md:gap-10 items-center md:mb-3">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="flex-1  mx-3 xl:mx-0 ">
            <h4 className="heading-4 max-w-md mb-4 md:mb-[20px] text-[#222]">
              Search Engine Optimization (SEO)
            </h4>
            <p className="paragraph-default text-[#222] mb-7 md:mb-9">
              At Session Media we build technically sound and creative SEO
              strategies which lift your brand to dominate the organic search
              results for the most relevant and profitable terms.For you, that
              means more visibility and qualified leads at the lowest possible
              cost.
            </p>

            <AnimatedLink link="/seo" name="Read More" classes="figure-caption" />
          </motion.div>
          <div className="flex-1 2xl:-mr-36 mx-3 xl:mx-0 pt-10 md:pt-0">
            <Image
              src="/images/service/seo.png"
              width={1000}
              height={650}
              alt="solution bg image"
            />
          </div>
        </div>
        {/* Service no 2 */}
        <div className="flex flex-col-reverse lg:flex-row md:gap-10 items-center mt-10 lg:mt-0">
          <div className="flex-1 mx-3 lg:or xl:mx-0">
            <Image
              src="/images/service/smm.png"
              width={512}
              height={474}
              alt="solution bg image"
            />
          </div>
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="flex-1 mx-3 xl:mx-0  ">
            <h4 className="heading-4 mb-[20px] text-[#222]">
              Social Media <br /> Marketing (SMM)
            </h4>
            <p className="paragraph-defualt text-[#222] mb-7 md:mb-9">
              Passionate about data and acquisition, we offer campaigns on
              social networks. May i the most take When we start a project, we
              set up the tracking of your ads in order to give you all the KPIs
              essential to your objectives, without loss of information and with
              reliable monitoring.
            </p>

            <AnimatedLink link="/smm" name="Read More" classes="figure-caption" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Service;
