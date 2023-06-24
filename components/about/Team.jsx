import Image from "next/image";
import { team } from "../../data/team";
import Social from "../Others/Social";

const Team = () => {
  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[115px] pb-[70px] md:pb-[120px]" style={{"margin-bottom":"60px"}}>
        <div className="flex justify-center">
          <div className="max-w-[700px]  text-center mx-3 mb-28 md:mb-[136px] lg:mx-0">
            <h5 className="heading-5 text-[var(--color-primary)]">Who we are?</h5>
            <h2 className="heading-2 text-[#222] mt-2 mb-6">
              Meet Our <span className="text-[var(--color-primary)]">Team</span>
            </h2>
            <p className="paragraph-default text-[#222]">
              A group of top people decided to make easy and fast the process to start and grow your business.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col mx-3 md:mx-0 flex-wrap md:flex-row gap-x-6 gap-y-28 lg:gap-y-[138px]">
          {team.map((member) => (
            <div
              className="w-[280px] mx-auto md:mx-2 lg:mx-0 flex flex-col justify-center md:w-[306px] shadow-xl text-[#222] text-center md:px-14 bg-white rounded-lg"
              key={member.id}
            >
              <div className="-mt-20 mx-auto w-48 h-48 duration-500 hover:rounded-full border-4 rounded-full border-transparent hover:border-4 hover:border-[var(--color-primary)]">
                <Image
                  className="rounded-full "
                  src={member.img}
                  height={200}
                  width={200}
                  alt="team"
                />
              </div>
              <h5 className="heading-5 mb-2 mt-4">
                {member.name}  
              </h5>
              <p className="paragraph-default mb-6 md:mb-9">{member.title}</p>
              <div className="mb-10 md:mb-[60px]">
                <Social classes="text-[#3D3D3D]" size="35" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
