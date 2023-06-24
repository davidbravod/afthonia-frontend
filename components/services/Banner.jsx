import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white lg:pt-[100px]">
      <Head>
        <title>Afthonia - Services</title>
        <link rel="icon" href="/icon-afthonia-white.ico" />
      </Head>
      <section className="bg-[url('/images/service/service-bg.png')] md:bg-[length:300px_350px] bg-[#1A4DBE] bg-no-repeat bg-left-top">
        <div className="py-16 lg:py-[130px] max-w-[1296px] mx-3 xl:mx-auto">
          <h1 className="text-white heading-1 mb-3">
            Our Services
          </h1>
          <p className="paragraph-default text-white"><Link href="/"><a>Home</a></Link> → Services</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
