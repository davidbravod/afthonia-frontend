import Link from "next/link";
import { marketingProcess } from "../../data/marketingProcess";
const MarketingProcess = () => {
  return (
    <section className="bg-[#F9F9F9] bg-[url('/images/smm/process-bg.png')] bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pb-[70px] md:pb-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] pt-14 md:pt-[115px] text-center mx-3 mb-10 md:mb-[57px] lg:mx-0">
            <h3 className="heading-5 mb-3 text-[var(--color-primary)]">
              Process
            </h3>
            <h2 className="heading-2 mb-5">
              Marketing Process
            </h2>
            <p className="paragraph-default">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed
              mattis pulvinar gravida parturient nunc.
            </p>
          </div>
        </div>
        <div className="flex mx-3 gap-5 md:gap-10 flex-wrap ml-8 md:ml-0  md:justify-center">
          {marketingProcess.map(({ id, title, color }) => (
            <div className="flex gap-3 md:gap-5 items-center " key={id}>
              <span
                className={`w-6 h-6 md:h-10 md:w-10 rounded-full bg-[${color}] ${id == 2 && "bg-[#FF5349]"} ${
                  id == 4 && "bg-[#7879F1]"
                } ${id == 5 && "bg-[#F178B6]"}`}
              ></span>
              <h4 className="paragraph-large text-[#222]">{title}</h4>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-[60px] flex justify-center">
          <Link href="/contact">
            <a
              className={`px-5 py-3 md:px-6 relative z-10 md:py-4 cursor-pointer  rounded-[5px] shadow-lg shadow-[#ff6f2c65] hover:shadow-none group overflow-hidden bg-[#FF6E2C] text-white inline-block `}
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-[#222] paragraph-default text-white font-semibold duration-500">
                Get Started Now
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketingProcess;
