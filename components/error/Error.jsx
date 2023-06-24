import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1296px] mx-auto text-center">
        <Image
          src="/images/error/404.png"
          width={1296}
          height={600}
          alt="404 image"
        />
        <div className=" text-center text-[#222]  pb-[70px] md:pb-[300px] pt-[60px]">
          <h2 className="heading-2 mb-2">
            OOOPS! <br /> SORRY PAGE NOT FOUND
          </h2>
          <p className="paragraph-default mb-7 md:mb-[48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <Link href="/">
            <a
              className={`px-6 relative z-10 py-4 cursor-pointer  rounded-[5px] shadow-lg shadow-[#ff6f2c65] hover:shadow-none group overflow-hidden bg-[#FF6E2C] text-white inline-block`}
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-[#222] duration-500">
                Back to Home
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
