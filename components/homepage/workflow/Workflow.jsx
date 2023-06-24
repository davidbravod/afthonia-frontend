import Image from "next/image";
import { workflow } from "../../../data/workflow";
import {motion} from 'framer-motion'

const Workflow = () => {
  return (
    <section className="bg-[url('/images/workflow/bg.png')] bg-white">
      <div className="max-w-[1296px] mx-auto pt-[60px] md:pt-[115px] pb-[70px] md:pb-[120px]">
        <div className="flex justify-center mx-2 lg:mx-0">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px] text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">Workflow</h5>
            <h2 className="heading-2 mb-2 md:mb-[24px] mt-[10px]">
              Our Working <span className="text-[var(--color-primary)]">Process</span>
            </h2>
            <p className="paragraph-default mb-10 md:mb-[57px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col mx-2 lg:mx-0 md:flex-row items-center justify-center xl:justify-between flex-wrap gap-6">
          {workflow.map(({ id, title, img }) => (
            <div
              key={id}
              className="bg-white shadow-[0px_4px_24px_rgba(188,188,188,0.25)] cursor-pointer items-center w-[280px] md:w-[306px] p-6 md:py-14 flex flex-col md:px-20 rounded-md"
            >
              <Image src={img} width={135} height={135} alt="workflow icon" />
              <h5 className="heading-5 text-[#222] mt-7">
                {title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
