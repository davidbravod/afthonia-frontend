import Image from "next/image";
import { aboutFeatures } from "../../data/about_feature";

const About = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex px-3 md:mx-0 flex-col md:flex-row pt-[70px] md:pt-[120px]">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/about/illustration.png"
              height={479}
              width={503}
              alt="about image"
            />
          </div>
          <div className="w-full lg:w-1/2 text-[#222] ">
            <h2 className="heading-2 mb-2">
              We Designed An <span className="text-[var(--color-primary)] ">All-In-One </span>{" "}
              Solution{" "}
            </h2>
            <p className="paragraph-default mb-4">
              We are a business focused to help other businesses.
            </p>{" "}
          
            <p className="paragraph-default mb-3 md:mb-0">
            From seamless business formation and EIN application to reliable web hosting, personalized business email accounts,
            and AI-powered email campaigns and social media posts, we offer a comprehensive suite of services tailored to meet 
            your diverse business needs. Let us handle the boring stuff while you focus on growing your business and achieving 
            success in the digital world.

            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-[25px] md:flex-row flex-wrap mx-3 md:mx-0 gap-5 pb-[70px] md:pb-[120px]">
          {aboutFeatures.map(({ id, title, icon, desc }) => (
            <div
              className="w-[280px] md:w-[390px] mx-auto text-[#222] p-4 md:p-[30px] bg-white shadow-lg rounded"
              key={id}
            >
              <div
                className={`${id == 1 && "bg-[#FFD4D1]"} ${
                  id == 2 && "bg-[#D7E3FF]"
                } ${
                  id == 3 && "bg-[#FFE1B8]"
                } p-[30px] w-[120px] h-[120px] rounded-md cursor-pointer hover:shadow-xl duration-300`}
              >
                <Image src={icon} height={70} width={70} alt="icon" />
              </div>
              <h4 className="mt-4 md:mt-[30px] mb-3 md:mb-5 heading-4 text-[#444]">{title}</h4>
              <p className="paragraph-default">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
