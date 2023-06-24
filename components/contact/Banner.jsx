import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white lg:pt-[100px]  relative">
      <Head>
        <title>Afthonia - Contact Us</title>
        <link rel="icon" href="/icon-afthonia-white.ico" />
      </Head>
      <section className="bg-[#1A4DBE]">
        <div className="bg-[url('/images/contact/banner-bg.png')] bg-[length:300px_200px] md:bg-[length:650px_400px] md:block xl:right-80 absolute  w-full  bg-no-repeat bg-right-bottom min-h-[435px]"></div>
        <div className="py-16 lg:py-[138px] z-10 relative max-w-[1296px] mx-3 xl:mx-auto">
          <h1 className="text-white heading-1 mb-2 md:mb-4">
            Contact us
          </h1>
          <p className="paragraph-default text-white"><Link href="/"><a>Home</a></Link> → Contact us</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
