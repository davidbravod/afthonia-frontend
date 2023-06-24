import Image from "next/image";
import MarketingImg from "../../public/images/seo/ms-img.png";
const Marketing = () => {
  return (
    <section className="bg-[#FFFDFA] bg-[url('/images/seo/ms-bg.png')] bg-no-repeat bg-left-top">
      <div className="bg-[url('/images/seo/ms-bg2.png')] bg-no-repeat bg-right-bottom">
        <div className="max-w-[1296px] mx-auto py-12 md:pt-[107px] md:pb-[80px]">
          <div className="flex flex-col md:flex-row mx-3 xl:mx-0">
            <div className="md:w-1/2 mx-3 xl:mx-0 mt-5 md:mt-0 mb-10 md:mb-0">
              <h2 className="heading-2 mb-6">
                <span className="text-[var(--color-primary)]">Marketing </span> <br />
                Strategy
              </h2>
              <p className="paragraph-default  text-[#444]">
                Sit turpis vulputate lobortis facilisis dui. Fermentum pulvinar
                imperdiet ultrices augue et eget. Vestibulum eu feugiat in
                accumsan integer lectus viverra ut tincidunt. consectetur
                adipiscing elit. Imperdiet diam in commodo platea mi. Nec
                iaculis eget aliquam tellus ullamcorper at. Urna,
              </p>
            </div>
            <div className="md:w-1/2 xl:-mr-40 xl:ml-10">
              <Image
                src={MarketingImg}
                width={416}
                height={512}
                alt="solution bg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
