import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white lg:pt-[100px]  relative">
      <Head>
        <title>Blog</title>
      </Head>
      <section className="bg-[#1A4DBE]">
        <div className="py-16 lg:pb-[138px] lg:pt-[130px] z-10 relative max-w-[1296px] mx-3 xl:mx-auto md:bg-[url('/images/blog/banner-bg.png')] bg-[length:300px_200px] md:bg-[length:800px_400px]  md:block   w-full  bg-no-repeat bg-right-bottom">
          <h1 className="text-white heading-1 mb-4 md:mb-8 ">
            Blog
          </h1>
          <p className="paragraph-default text-white"><Link href="/"><a>Home</a></Link> → Blog</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;