import Image from "next/image";
import Link from "next/link";
import { VscEye } from "react-icons/vsc";
import { portfolio } from "../../data/portfolio";
const Portfolio = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1296px] mx-auto">
        <div className="text-center w-full flex justify-center">
          <div className="max-w-4xl flex flex-col justify-center">
            <h5 className="text-[var(--color-primary)] heading-5 pt-[67px] md:pt-[115px]">
              Portfolio
            </h5>
            <h2 className="text-center heading-2 pt-[10px]  mb-2">
              Showcase Our <span className="text-[var(--color-primary)]">Works</span>
            </h2>
            <p className="text-[#444] mx-2 md:mx-0 paragraph-default md:px-40  text-center mb-8 md:mb-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>
        <div className="flex gap-y-4 md:gap-y-8 mx-2 xl:mx-0 justify-center gap-x-4  pb-16 lg:pb-[268px] flex-wrap">
          {portfolio.map(({ id, img, url }) => (
            <div
              className="w-[300px] md:w-[330px] lg:w-[400px] xl:w-[630px] showcase rounded-md cursor-pointer relative"
              key={id}
            >
              <Image
                src={img}
                width={636}
                className="rounded-md shadow-md"
                height={448}
                alt="image"
              />

              <Link href={url}>
                <div className="overlay absolute top-0 flex justify-center items-center rounded-md w-full h-[98.5%] bg-[#6365e4db]">
                  <VscEye
                    size={80}
                    className="border-4 text-white border-white p-4 rounded-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
