import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white lg:pt-[100px]  relative">
      <Head>
        <title>SEO</title>
      </Head>
      <div className="bg-[#1A4DBE]">
        <div className="bg-[url('/images/seo/banner-bg.png')] bg-[length:300px_200px] md:bg-[length:650px_400px] md:block xl:right-80 absolute  w-full  bg-no-repeat bg-right-bottom"></div>
        <div className="py-16 lg:py-[138px] z-10 relative max-w-[1296px] mx-3 xl:mx-auto">
          <h1 className="text-white heading-1 mb-2 md:mb-4">
            SEO
          </h1>
          <p className="paragraph-default text-white"><Link href="/"><a>Home</a></Link> → Service → SEO </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
