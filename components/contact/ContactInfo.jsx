import { GrPhone } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const ContactInfo = () => {
  return (
    <section className="flex flex-col -my-1 lg:flex-row bg-[#F9F9F9] justify-between ">
      <div className="lg:w-1/2 mx-2 lg:mx-0">
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.876581848853!2d-82.64071052506031!3d27.844331076104197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6a2b7855c1f%3A0x4e3e0f613f7708f7!2s7901%204th%20St%20N%2C%20St.%20Petersburg%2C%20FL%2033702%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1686256179556!5m2!1ses!2sco"
          className="w-full lg:w-[90%] h-full min-h-[300px]"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="text-[#222] max-h-[469px] mx-3 md:mx-0 flex flex-col border-[#444444] md:border-l-[1px] md:w-1/2 my-5 md:my-[60px] sm:pl-5 xl:pl-[120px] xl:py-[60px] gap-3 md:gap-6 lg:gap-[30px] mb-[50px] lg:mb-[250px] xl:mb-[350px]">
        <div className="flex lg:gap-8 gap-3 items-center ">
          <HiOutlineMail className="shrink-0 text-2xl md:text-4xl" />
          <a
            href="mailto:support@afthoniaent.com"
            className="heading-4 text-[#222]"
          >
            support@afthoniaent.com
          </a>
        </div>
        <div className="flex lg:gap-8 gap-3">
          <GrPhone className="shrink-0 text-2xl md:text-4xl" />
          <a
            href="tel:+7548026363"
            className="heading-4 text-[#222]"
          >
            +1 754 802 6363
          </a>
        </div>
        <address className="flex lg:gap-8 gap-3 not-italic">
          <SlLocationPin className="shrink-0 text-2xl md:text-4xl" />
          <p className="paragraph-large">
          7901 4TH ST N STE 300. <br /> ST. PETERSBURG, FL.
          33702 USA
          </p>
        </address>
      </div>
    </section>
  );
};

export default ContactInfo;
