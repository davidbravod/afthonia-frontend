import { specialization } from "../../data/specilization";
const Specialization = () => {
  return (
    <section className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto pt-16 pb-[70px] md:pt-[125px] md:pb-[120px]">
        <div className="flex justify-center mx-2 md:mx-0">
          <div className="text-center max-w">
            <h2 className="heading-2 mb-6 md:mb-[40px]">
              Areas of Specialization
            </h2>
            <p className="max-w-[590px] paragraph-default mb-8 md:mb-[53px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              in commodo a mi sed.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap flex-col justify-center md:flex-row gap-5 mx-2 lg:mx-0 ">
          {specialization.map(({ id, title, desc, icon }) => (
            <div
              className="w-[280px] mx-auto md:mx-3 lg:mx-0 sm:w-[306px] hover:bg-[var(--color-primary)] hover:text-white text-[#222] bg-white transition-colors duration-300 rounded-[10px] shadow-[0px_4px_23px_rgba(184,184,184,0.25)] hover:shadow-[0px_7px_23px_rgba(255,83,73,0.35)] p-4 md:p-[25px] specialization"
              key={id}
            >
              <span
                className={`text-white hover:text-[var(--color-primary)] flex justify-center items-center p-5 w-16 md:w-24 h-16 md:h-24 rounded-full  text-3xl ${
                  id == 3 && "bg-[#FF9300]"
                } ${id == 4 && "bg-[#1A4DBE]"} ${id == 1 && "bg-[var(--color-primary)] "} ${
                  id == 2 && "bg-[var(--color-primary)] "
                } icon-span`}
              >
                {icon}
              </span>
              <h5 className="heading-5 mt-6 mb-2">{title}</h5>
              <p className="paragraph-default hover:text-white">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;
