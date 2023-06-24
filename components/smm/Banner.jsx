import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FbMarketing from '../../public/images/smm/banner-bg.png'
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white lg:pt-[100px]  relative">
      <Head>
        <title>SMM</title>
      </Head>
      <div className="bg-[#1A4DBE]  lbg-[url('/images/smm/bg-shape.png')] bg-no-repeat bg-left-top md:bg-[length:450px_400px]">
        <div className=" z-10 relative max-w-[1296px] mx-3 xl:mx-auto flex justify-between">
         <div className="py-16 lg:py-[138px]">
         <h1 className="text-white heading-1 mb-2 md:mb-4">
            SMM
          </h1>
          <p className="paragraph-default text-white"><Link href="/"><a>Home</a></Link> → Service → SMM </p>
         </div>
         <div className="hidden lg:block">
            <Image src={FbMarketing} alt="banner img" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
