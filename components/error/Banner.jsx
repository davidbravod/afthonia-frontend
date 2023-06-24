import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] lg:pt-[100px] bg-white  relative">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="bg-[#1A4DBE] md:min-h-[435px]">
        <div className="md:bg-[url('/images/error/banner.png')] bg-[length:300px_200px] md:bg-[length:800px_400px] md:block xl:right-40 absolute  w-full  bg-no-repeat bg-right-bottom md:min-h-[435px]"></div>
        <div className="py-16 lg:py-[138px] z-10 relative max-w-[1296px] mx-3 xl:mx-auto">
          <h1 className="text-white heading-1 mb-2 md:mb-4">
            404 Error
          </h1>
          <p className="paragraph-default text-white"><Link href="/"><a>Home</a></Link> → 404 Error</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
