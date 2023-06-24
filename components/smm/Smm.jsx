import Image from "next/image";
import SmmImg from '../../public/images/smm/smm.png'
const Smm = () => {
  return (
    <section className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto pt-[70px] md:pt-[120px] md:pb-[114px] ">
        <div className="flex flex-col md:flex-row items-center md:gap-10">
        <div className="flex-1  2xl:-ml-16 mx-3 xl:mx-0 mb-8 md:mb-0">
            <Image
              src={SmmImg}
              width={703}
              height={586}
              alt="smm image"
            />
          </div>
          <div className="flex-1 mx-3 ">
            <h2 className="heading-2 mb-[24px]">
              <span className="text-[#2957BD]"> Social Media </span>
              Marketing {"(SMM)"}
            </h2>
            <p className="paragraph-default  mb-5 text-[#444]">
              Passionate about data and acquisition, we offer campaigns on
              social networks.
            </p> 

            <p className="paragraph-default mb-[70px] text-[#444]">
              When we start a project, we set up the tracking of your ads in
              order to give you all the KPIs essential to your objectives,
              without loss of information and with reliable monitoring.
              Passionate about data and acquisition, we offer campaigns on
              social networks.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Smm;
